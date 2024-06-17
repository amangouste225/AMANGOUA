export const easing = [0.76, 0, 0.24, 1];

export const anim = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export const blur = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: easing },
  },
  closed: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ease: easing },
  },
  moveX: {
    x: -30,
    transition: { duration: 0.5, ease: easing },
  },

  moveY: {
    x: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export const steps = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  reveal: {
    opacity: 1,
  },
};

export const vars = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ease: easing },
  },
  reveal: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easing } },
  moveX: {
    x: -30,
    transition: { duration: 0.5, ease: easing },
  },
  moveY: {
    x: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export const varMotions = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
