import { useEffect } from "react";

export const useBlobVisibility = (): void => {
  useEffect(() => {
    const wrapperElements = Array.from(
      document.querySelectorAll<HTMLElement>(".section-wrapper"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target
            .querySelectorAll<HTMLElement>(".blob")
            .forEach((blob) => blob.classList.add("blob--visible"));
        });
      },
      { threshold: 0.08 },
    );

    wrapperElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};
