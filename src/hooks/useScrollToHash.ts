import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToHash = (): void => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const selector = location.hash;
    const element = document.querySelector<HTMLElement>(selector);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    requestAnimationFrame(() => {
      const fallback = document.querySelector<HTMLElement>(selector);
      fallback?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash, location.pathname]);
};
