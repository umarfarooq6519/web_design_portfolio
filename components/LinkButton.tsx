import { ArrowUpRight } from "@/public/ArrowUpRight";
import Link from "next/link";

const LinkButton = ({ text, link }: { text: string; link: string }) => (
  <Link
    href={link}
    className="inline-flex w-fit cursor-pointer items-center gap-2 text-lg font-medium uppercase"
  >
    <span>[</span>
    {text}
    <ArrowUpRight />
    <span>]</span>
  </Link>
);

export default LinkButton;
