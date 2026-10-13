/** How often an open page asks the server which version is the newest. */
const CHECK_MS = 60_000;
/** Reloads in a row are limited, so a server that lags behind cannot trap the page in a loop. */
const MAX_RELOADS = 3;
const WINDOW_MS = 5 * 60_000;
const STORAGE_KEY = 'dln:reloads';

function reloadBudgetLeft(): boolean {
  try {
    const now = Date.now();
    const recent = (JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '[]') as number[]).filter(
      (t) => now - t < WINDOW_MS,
    );
    if (recent.length >= MAX_RELOADS) return false;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...recent, now]));
  } catch {
    // without storage the reload still happens once per detected change
  }
  return true;
}

/** Drops the service worker and every cache, then loads the page again from the network. */
async function reloadFresh(): Promise<void> {
  try {
    const registrations = await navigator.serviceWorker?.getRegistrations();
    await Promise.all((registrations ?? []).map((r) => r.unregister()));
    await Promise.all((await caches.keys()).map((key) => caches.delete(key)));
  } finally {
    window.location.reload();
  }
}

/** Asks the server for the newest build id (never from a cache) and reloads when it differs. */
async function check(): Promise<void> {
  try {
    const url = `${import.meta.env.BASE_URL}version.json?t=${Date.now()}`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) return;
    const { id } = (await response.json()) as { id?: string };
    if (id && id !== __BUILD_ID__ && reloadBudgetLeft()) await reloadFresh();
  } catch {
    // offline or a bad answer: keep the version that is on screen
  }
}

/**
 * Makes sure the page is the newest build. It does not wait for the service worker, which phones
 * can be slow to update: the page compares its build id with `version.json` when it opens, when
 * it comes back to the screen or the network returns, and every minute.
 */
export function watchVersion(): () => void {
  if (import.meta.env.DEV) return () => {};
  void check();
  const timer = window.setInterval(() => void check(), CHECK_MS);
  const onVisible = () => {
    if (document.visibilityState === 'visible') void check();
  };
  const onOnline = () => void check();
  document.addEventListener('visibilitychange', onVisible);
  window.addEventListener('online', onOnline);
  window.addEventListener('pageshow', onOnline);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener('visibilitychange', onVisible);
    window.removeEventListener('online', onOnline);
    window.removeEventListener('pageshow', onOnline);
  };
}
