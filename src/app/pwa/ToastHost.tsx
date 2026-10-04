import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { UI_TEXT } from '@/config/site';

/**
 * Bottom-left host for the "offline ready" and "new version ready" toasts, driven by the
 * service worker. A new version only takes over after the student presses the action.
 */
export function ToastHost() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const dismiss = (
    <Button
      variant="text"
      className="text-on-dark-soft"
      onClick={() => {
        setOfflineReady(false);
        setNeedRefresh(false);
      }}
    >
      {UI_TEXT.dismiss}
    </Button>
  );

  return (
    <div aria-live="polite" className="fixed bottom-4 left-4 z-50 max-w-[calc(100vw-2rem)]">
      {needRefresh ? (
        <Toast
          action={
            <>
              <Button onClick={() => void updateServiceWorker(true)}>{UI_TEXT.updateAction}</Button>
              {dismiss}
            </>
          }
        >
          {UI_TEXT.updateReady}
        </Toast>
      ) : offlineReady ? (
        <Toast action={dismiss}>{UI_TEXT.offlineReady}</Toast>
      ) : null}
    </div>
  );
}
