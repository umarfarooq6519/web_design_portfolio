import { Transition, Variants } from "motion";

// A small pop-in animation used by small UI pieces (icons, headings)
export const navbarTrans: Transition = {
  delay: 0.25,
};

export const navbarVar: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

// Fade-up animation for elements when they come into view
export const standardInViewFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { delay: 0.2, duration: 0.6 },
};
