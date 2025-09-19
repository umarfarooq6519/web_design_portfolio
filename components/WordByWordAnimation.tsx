"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const WordByWordAnimation = () => {
  const text =
    "I build websites to your brand's story - blending creativity with functionality & experiences that feel natural to the brand while engaging users";

  const words = text.split(" ");
  const totalWords = words.length;

  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <motion.h3
      ref={ref}
      className="flex flex-wrap font-normal md:leading-11 lg:leading-16"
    >
      {words.map((word, i) => {
        // Normalize threshold so last word triggers at scrollYProgress = 1
        const threshold = i / totalWords;

        const opacity = useTransform(
          scrollYProgress,
          (v) => (v >= threshold ? 1 : 0.3), // snap in
        );

        return (
          <motion.span key={i} style={{ opacity }} className="mr-2">
            {word}
          </motion.span>
        );
      })}
    </motion.h3>
  );
};

export default WordByWordAnimation;
