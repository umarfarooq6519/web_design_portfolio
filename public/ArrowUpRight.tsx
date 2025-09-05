export const ArrowUpRight = ({
  size = 18,
  width = 2,
  color = "currentColor",
}: {
  size?: number;
  width?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={width}
    stroke={color}
    width={size}
    height={size}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);
