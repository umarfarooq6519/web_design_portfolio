import { motion } from "motion/react";

export const Menu = ({
  className = "",
  width = 1.5,
  color = "currentColor",
}: {
  className?: string;
  width?: number;
  color?: string;
}) => (
  <motion.svg
    initial={{
      scale: 0,
    }}
    animate={{
      scale: 1,
    }}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={width}
    stroke={color}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9h16.5m-16.5 6.75h16.5"
    />
  </motion.svg>
);
