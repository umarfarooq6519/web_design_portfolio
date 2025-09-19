"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function RotatingWords() {
  const words = ["Designer", "Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          initial={{ y: -140, x: 0 }}
          animate={{ y: 0, x: 0 }}
          exit={{ y: 140, x: 0 }}
          //   transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
