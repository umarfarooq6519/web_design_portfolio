"use client";
import { projects } from "@/utils/projects";
import { useState, useEffect } from "react";
import Image from "next/image";

const ShufflingCards = () => {
  const [shuffled, setShuffled] = useState(projects);

  useEffect(() => {
    const interval = setInterval(() => {
      const newArr = [...projects];

      // Fisher–Yates shuffle
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }

      setShuffled(newArr);
    }, 700); // adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper relative -mt-6 -ml-6 min-h-full lg:-mt-7 lg:-ml-10 xl:-mt-9">
      {shuffled.map((project, index) => (
        <div
          key={project.id}
          className={`absolute h-[280px] w-[200px] overflow-hidden rounded shadow-sm sm:h-[320px] sm:w-[260px] md:h-[380px] md:w-[310px] lg:h-[480px] lg:w-[400px] xl:h-[460px] xl:w-[380px] ${
            index === 0
              ? "top-0 left-0 xl:left-100"
              : index === 1
                ? "top-5 left-5 xl:left-105"
                : "top-10 left-10 xl:left-110"
          }`}
        >
          <Image
            src={project.portraitImg!}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ShufflingCards;
