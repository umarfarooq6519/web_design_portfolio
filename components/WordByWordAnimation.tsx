"use client";

const WordByWordAnimation = () => {
  const text =
    "I build websites to your brand's story - blending creativity with functionality & experiences that feel natural to the brand while engaging users";

  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <h3 className="flex flex-wrap font-normal md:leading-14 lg:leading-16">
      {words.map((word, i) => (
        <span key={i} className="mr-2">
          {word}
        </span>
      ))}
    </h3>
  );
};

export default WordByWordAnimation;
