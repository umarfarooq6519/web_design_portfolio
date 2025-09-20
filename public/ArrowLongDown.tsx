"use client";
import { motion } from "motion/react";

export const ArrowLongDown = ({
  className = "",
  width = 0.5,
  color = "currentColor",
}: {
  className?: string;
  width?: number;
  color?: string;
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={width}
    stroke={color}
    className={className}
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.2,
        ease: "easeInOut",
      }}
    />
  </motion.svg>
);
