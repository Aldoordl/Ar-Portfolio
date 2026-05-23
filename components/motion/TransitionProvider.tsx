"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type TransitionContextValue = {
  startPageTransition: (href: string) => void;
  isTransitioning: boolean;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

function cleanDuplicateHash(href: string) {
  if (!href.includes("#")) return href;

  const [path, firstHash] = href.split("#");

  if (!firstHash) return path || "/";

  return `${path || "/"}#${firstHash}`;
}

export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used inside TransitionProvider"
    );
  }

  return context;
}

type TransitionProviderProps = {
  children: ReactNode;
};

export default function TransitionProvider({
  children,
}: TransitionProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startPageTransition = useCallback(
    (href: string) => {
      const safeHref = cleanDuplicateHash(href);

      if (shouldReduceMotion) {
        router.push(safeHref, {
          scroll: false,
        });
        return;
      }

      setIsTransitioning(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        router.push(safeHref, {
          scroll: false,
        });
      }, 520);
    },
    [router, shouldReduceMotion]
  );

  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 460);

    return () => clearTimeout(timeout);
  }, [pathname, isTransitioning]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        startPageTransition,
        isTransitioning,
      }}
    >
      {children}

      <AnimatePresence>
        {isTransitioning && !shouldReduceMotion ? (
          <motion.div
            className="page-transition"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.56,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="page-transition__glow" />
            <div className="page-transition__content">
              <span>Shaping the next scene</span>
              <strong>Aldo Ridlo.</strong>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}