import PageLoader from '@/components/common/PageLoader';
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';

export type RouteLoaderApi = {
  dismiss: () => void;
};

const RouteLoadingContext = createContext<RouteLoaderApi | null>(null);

export function useRouteLoaderDismiss() {
  return useContext(RouteLoadingContext)?.dismiss ?? (() => {});
}

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '';
}

/**
 * Remounts on each navigation (via parent key). Starts with full-screen loader
 * until the route signals ready (or home hero video can play).
 */
export function RouteTransitionShell({ children }: { children: ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const dismiss = useCallback(() => setShowLoader(false), []);
  const api = useMemo(() => ({ dismiss }), [dismiss]);

  return (
    <RouteLoadingContext.Provider value={api}>
      {showLoader ? <PageLoader /> : null}
      <div
        className={showLoader ? 'invisible pointer-events-none' : undefined}
        aria-hidden={showLoader}
      >
        {children}
      </div>
    </RouteLoadingContext.Provider>
  );
}

/**
 * Dismisses loader when the route has mounted — except on home, where the hero
 * video calls `useRouteLoaderDismiss()` when it can play.
 */
export function RouteContentReady({ children }: { children: ReactNode }) {
  const { dismiss } = useContext(RouteLoadingContext)!;
  const location = useLocation();

  useLayoutEffect(() => {
    if (isHomePath(location.pathname)) {
      return;
    }
    dismiss();
  }, [location.pathname, dismiss]);

  return <>{children}</>;
}
