import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 4,
  yOffset = 12,
}: FloatingCardProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-yOffset / 2, yOffset / 2, -yOffset / 2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
