import { ArrowUpRight } from "@/public/ArrowUpRight";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonType = {
  text: string;
  link: string;
  icon?: ReactNode;
  prefixIcon?: boolean;
};

const LinkButton = ({
  text,
  link,
  icon = <ArrowUpRight />,
  prefixIcon = false,
}: LinkButtonType) => (
  <Link
    href={link}
    className="inline-flex w-fit cursor-pointer items-center gap-2 text-lg font-medium uppercase"
  >
    <span>[</span>
    <span
      className={`flex ${prefixIcon ? "flex-row-reverse" : ""} mt-1 items-center gap-2 drop-shadow`}
    >
      {text}
      {icon}
    </span>
    <span>]</span>
  </Link>
);

export default LinkButton;
