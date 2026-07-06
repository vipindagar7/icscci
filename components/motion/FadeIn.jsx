"use client";

import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal wrapper built on framer-motion.
 * Wrap any block of content: <FadeIn><Card>...</Card></FadeIn>
 */
export function FadeIn({ children, delay = 0, y = 16, once = true, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger a list of children — wrap the list container in this,
 * and each item in <FadeIn.Item> or plain motion handled by parent variants. */
export function Stagger({ children, className, delayChildren = 0, staggerChildren = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren, delayChildren }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }
};
