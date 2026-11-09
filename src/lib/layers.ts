import { useCallback, useEffect, useRef, type RefObject } from 'react';
import { useLocation, useNavigate, type Location, type NavigateFunction } from 'react-router-dom';

/**
 * Layers: what is open on top of a page (a drawer, a menu, a dialog) is a layer, and every layer is an
 * entry of the browser history, so the back gesture of a phone, the back button and Alt+Left close the
 * layer on top instead of leaving the page. The layers that are open are kept, as a list of names from
 * the bottom up, in the state of the current history entry:
 *
 *   show("tasks")   pushes an entry whose state lists "tasks" on top of what was open
 *   hide("tasks")   goes back as many entries as there are layers from "tasks" up (one for the top layer)
 *   back (any way)  pops an entry, and the layer it added closes
 *
 * Going back is asynchronous in a browser, so the calls are queued: one is carried out when the one
 * before it has changed the location, and a hide followed by a show comes out in that order.
 */

type Op = { kind: 'show' | 'hide'; id: string };

/** How long a call waits for the history to answer before the next one goes on (a safety, never needed in practice) */
const MAX_WAIT_MS = 600;

const queue: Op[] = [];
let busyFrom: string | null = null;
let timer: ReturnType<typeof setTimeout> | undefined;
let latest: { navigate: NavigateFunction; location: Location } | null = null;

/** The layers listed in a history state, from the bottom up. */
export function layersOf(state: unknown): string[] {
  const layers = (state as { layers?: unknown } | null | undefined)?.layers;
  return Array.isArray(layers) ? layers.filter((x): x is string => typeof x === 'string') : [];
}

const here = (location: Location) => `${location.pathname}${location.search}${location.hash}`;

function finish() {
  busyFrom = null;
  clearTimeout(timer);
  run();
}

function run() {
  if (busyFrom !== null || !latest) return;
  const op = queue.shift();
  if (!op) return;
  const { navigate, location } = latest;
  const layers = layersOf(location.state);
  const at = layers.indexOf(op.id);
  if (op.kind === 'show' ? at >= 0 : at < 0) {
    // already so: nothing to do, on to the next
    run();
    return;
  }
  busyFrom = location.key;
  timer = setTimeout(finish, MAX_WAIT_MS);
  if (op.kind === 'show') navigate(here(location), { state: { layers: [...layers, op.id] } });
  else navigate(-(layers.length - at));
}

/**
 * Layers that a reload found in the history entry it came back to are not opened again: the page goes
 * back to the entry below them, which is the page as it was before they opened. Read once, when the
 * page loads.
 */
let staleChecked = false;
function staleLayerCount(): number {
  if (staleChecked || typeof window === 'undefined') return 0;
  staleChecked = true;
  return layersOf((window.history.state as { usr?: unknown } | null)?.usr).length;
}

/** Forgets what the page loaded with and what was waiting. For tests. */
export function resetLayers(): void {
  queue.length = 0;
  busyFrom = null;
  clearTimeout(timer);
  latest = null;
  staleChecked = false;
}

/**
 * One layer: `open` while it is among the layers of the current history entry, `show` to open it
 * (a new entry), `hide` to close it and anything above it (back, as many entries as that is).
 */
export function useLayer(id: string): { open: boolean; show: () => void; hide: () => void } {
  const navigate = useNavigate();
  const location = useLocation();
  const open = layersOf(location.state).includes(id);

  useEffect(() => {
    latest = { navigate, location };
    const stale = staleLayerCount();
    if (stale > 0) {
      const index = (window.history.state as { idx?: number } | null)?.idx ?? 0;
      if (index >= stale) navigate(-stale);
      else navigate(here(location), { replace: true, state: null });
      return;
    }
    if (busyFrom !== null && location.key !== busyFrom) finish();
  }, [navigate, location]);

  const show = useCallback(() => {
    queue.push({ kind: 'show', id });
    run();
  }, [id]);
  const hide = useCallback(() => {
    queue.push({ kind: 'hide', id });
    run();
  }, [id]);
  return { open, show, hide };
}

/**
 * Puts the focus back on the button that opened a layer when the layer closes, unless the page
 * changed in the meantime (then the page takes the focus, as after any navigation).
 */
export function useRestoreFocus(open: boolean, target: RefObject<HTMLElement | null>): void {
  const { pathname } = useLocation();
  const was = useRef({ open, pathname });
  useEffect(() => {
    if (was.current.open && !open && was.current.pathname === pathname) {
      target.current?.focus();
    }
    was.current = { open, pathname };
  }, [open, pathname, target]);
}
