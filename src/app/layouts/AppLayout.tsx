import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { ToastHost } from '@/app/pwa/ToastHost';

export function AppLayout() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const first = useRef(true);

  // After a navigation, move focus to <main> so keyboard and screen reader users start at the content.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a
        href="#main"
        className="type-button sr-only rounded-md bg-ink px-4 py-3 text-on-dark focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60]"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        ข้ามไปยังเนื้อหา
      </a>
      <Navbar />
      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        className="outline-none focus-visible:shadow-none"
      >
        <Outlet />
      </main>
      <ToastHost />
    </>
  );
}
