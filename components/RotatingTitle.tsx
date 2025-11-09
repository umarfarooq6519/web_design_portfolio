"use client";

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
      <h1>{words[index]}</h1>
    </div>
  );
}
