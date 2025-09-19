import * as motion from "motion/react-client";

export const Star = ({
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
      x: -200,
      rotate: 0,
    }}
    animate={{
      x: 0,
      rotate: 360,
    }}
    transition={{
      delay: 0.6,
      duration: 0.6,
      type: "spring",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 87 87"
    fill="none"
    className={className}
    strokeWidth={width}
    stroke={color}
  >
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.2502 36.3242L43.007 0.5625L38.7732 36.2454L23.2272 23.9435L35.3338 39.3772L0 43.5695L35.6768 47.8026L23.1427 63.642L38.8261 51.3396L43.007 86.5766L47.1879 51.3396L62.8413 63.7265L50.3491 47.8012L86.0141 43.5695L50.7711 39.3879L62.9258 24.0279L47.2502 36.3242Z"
    />
    <path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.2502 36.3242L43.007 0.5625L38.7732 36.2454L23.2272 23.9435L35.3338 39.3772L0 43.5695L35.6768 47.8026L23.1427 63.642L38.8261 51.3396L43.007 86.5766L47.1879 51.3396L62.8413 63.7265L50.3491 47.8012L86.0141 43.5695L50.7711 39.3879L62.9258 24.0279L47.2502 36.3242Z"
      fillOpacity="0.2"
    />
  </motion.svg>
);
