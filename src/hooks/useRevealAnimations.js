import { useEffect } from "react";

export default function useRevealAnimations() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const skillCards = document.querySelectorAll(".skill-card");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const bars = entry.target.querySelectorAll(".skill-bar-fill");
          bars.forEach((bar) => {
            bar.style.width = `${bar.dataset.width}%`;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    skillCards.forEach((item) => skillObserver.observe(item));

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);
}
