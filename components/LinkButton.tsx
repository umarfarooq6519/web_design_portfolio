"use client";
import { ArrowUpRight } from "@/public/ArrowUpRight";
import { standardInViewFade } from "@/utils/animations";
import { motion } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

type LinkButtonType = {
  text: string;
  link: string;
  icon?: ReactNode;
  prefixIcon?: boolean;
  className?: string;
};

const LinkButton = ({
  text,
  link,
  icon = (
    <ArrowUpRight className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-5 xl:w-5" />
  ),
  prefixIcon = false,
  className = "",
}: LinkButtonType) => (
  <Link href={link} className={`inline-flex w-fit cursor-pointer ${className}`}>
    <motion.div
      initial={standardInViewFade.initial}
      whileInView={standardInViewFade.whileInView}
      viewport={standardInViewFade.viewport}
      transition={standardInViewFade.transition}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 text-lg font-medium uppercase sm:text-xl md:text-[1.65rem] lg:text-3xl xl:text-lg"
      >
        <span>[</span>
        <span
          className={`flex ${prefixIcon ? "flex-row-reverse" : ""} mt-1 items-center gap-2 drop-shadow`}
        >
          {text}
          {icon}
        </span>
        <span>]</span>
      </motion.div>
    </motion.div>
  </Link>
);

export default LinkButton;
