"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useReveal = <T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
) => {
  const { root = null, rootMargin = "0px", threshold = 0.15 } = options;
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (el) observer.unobserve(el);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, revealed } as const;
};

export default useReveal;
