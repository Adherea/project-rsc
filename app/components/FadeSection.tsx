// === FadeSection.tsx ===
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeSectionProps {
  children: React.ReactNode;
  variant?: "default" | "zoom";
}

export default function FadeSection({ children, variant = "default" }: FadeSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const animations = {
    default: {
      initial: { opacity: 0, y: 50, scale: 0.95, rotateX: -10, blur: 10 },
      animate: { opacity: 1, y: 0, scale: 1, rotateX: 0, blur: 0 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const selected = animations[variant];

  return (
    <motion.div ref={ref} initial={selected.initial} animate={isInView ? selected.animate : {}} transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }} className="w-full h-full backdrop-blur-sm">
      {children}
    </motion.div>
  );
}
