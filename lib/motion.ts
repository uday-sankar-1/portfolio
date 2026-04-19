import { Variants } from "framer-motion";

const EASE_OUT = { duration: 0.2, ease: "easeOut" as const };

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0
): Variants => {
  const directionMap = {
    up:    { y: 30,  x: 0  },
    down:  { y: -30, x: 0  },
    left:  { x: 30,  y: 0  },
    right: { x: -30, y: 0  },
  };
  return {
    hidden: { opacity: 0, ...directionMap[direction] },
    show:   { opacity: 1, x: 0, y: 0, transition: { duration: 0.35, delay, ease: "easeOut" } },
  };
};

export const staggerContainer = (staggerChildren = 0.04, delayChildren = 0): Variants => ({
  hidden: {},
  show:   { transition: { staggerChildren, delayChildren } },
});

export const slideIn = (direction: "left" | "right", _type = "tween", delay = 0, duration = 0.35): Variants => ({
  hidden: { x: direction === "left" ? -60 : 60, opacity: 0 },
  show:   { x: 0, opacity: 1, transition: { duration, delay, ease: "easeOut" } },
});

export const textVariant = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, delay, ease: "easeOut" } },
});

export const zoomIn = (delay = 0, duration = 0.3): Variants => ({
  hidden: { scale: 0.8, opacity: 0 },
  show:   { scale: 1, opacity: 1, transition: { duration, delay, ease: "easeOut" } },
});

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export const navbarVariant: Variants = {
  visible: { y: 0,   opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  hidden:  { y: -80, opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export const mobileMenuVariant: Variants = {
  closed: { opacity: 0, height: 0,      transition: { duration: 0.2, ease: "easeIn"  } },
  open:   { opacity: 1, height: "auto", transition: { duration: 0.2, ease: "easeOut" } },
};

export const pathDrawVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show:   { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

// floatingBlob removed — blobs now handled by CSS @keyframes

export const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.97 } };

// once:true, amount:0.08 for better scroll performance
export const viewportConfig = { once: true, amount: 0.08 };

export const springTransition = EASE_OUT;

export const letterAnimation: Variants = {
  hidden:  { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
  }),
};

export const pulseAnimation = {
  animate:    { scale: [1, 1.1, 1] as number[] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};

export const sectionEntry: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const cardHover = {
  whileHover: { y: -8, scale: 1.02 },
  transition:  { duration: 0.2, ease: "easeOut" as const },
};
