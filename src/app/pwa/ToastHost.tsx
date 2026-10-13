import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { UI_TEXT } from '@/config/site';

/** How often an open page asks the server whether a new version exists. */
const UPDATE_CHECK_MS = 60_000;

/**
 * Bottom-left host for the "offline ready" toast, driven by the service worker. A new version
 * is applied automatically: the page checks for one on a timer and when the tab regains focus,
 * then activates it and reloads without asking.
 */
export function ToastHost() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      if (!registration) return;
      const check = () => void registration.update().catch(() => undefined);
      setInterval(check, UPDATE_CHECK_MS);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') check();
      });
    },
  });

  useEffect(() => {
    if (needRefresh) void updateServiceWorker(true);
  }, [needRefresh, updateServiceWorker]);

  return (
    <div aria-live="polite" className="fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)]">
      {offlineReady ? (
        <Toast
          action={
            <Button
              variant="text"
              className="text-on-dark-soft"
              onClick={() => setOfflineReady(false)}
            >
              {UI_TEXT.dismiss}
            </Button>
          }
        >
          {UI_TEXT.offlineReady}
        </Toast>
      ) : null}
    </div>
  );
}
