import { ArrowUpRight } from "@/public/ArrowUpRight";

const LinkButton = ({ text, link }: { text: string; link: string }) => (
  <a
    href="link"
    className="flex items-center gap-2 text-lg font-medium uppercase"
  >
    <span>[</span>
    {text}
    <ArrowUpRight />
    <span>]</span>
  </a>
);

export default LinkButton;
