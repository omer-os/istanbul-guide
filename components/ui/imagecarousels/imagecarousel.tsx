"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Imagecarousel({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const SlideImage = (direction: "left" | "right") => {
    setDirection(direction);
    if (direction === "left") {
      setCurrentImage((currentImage) =>
        currentImage === 0 ? images.length - 1 : currentImage - 1
      );
    } else {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }
  };

  return (
    <div className={className + " relative w-full h-full"}>
      <AnimatePresence mode="popLayout">
        {images.map(
          (i, index) =>
            currentImage === index && (
              <motion.div
                key={index}
                className={`
                absolute w-full h-full top-0
                transition-all duration-500`}
                initial={{
                  opacity: 0,
                  x: direction === "left" ? "-100%" : "100%",
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction === "left" ? "100%" : "-100%",
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <img
                  src={i}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 p-2">
        {images.map((i, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer ${
              currentImage === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      <div className="absolute top-1/2 flex justify-between items-center w-full z-10">
        <button
          className="w-10 h-10 active:scale-95 transition-all rounded-full bg-white cursor-pointer flex justify-center items-center
          -translate-y-2/4 shadow-xl
          "
          onClick={() => {
            setDirection("left");
            setCurrentImage(
              currentImage === 0 ? images.length - 1 : currentImage - 1
            );
          }}
        >
          <HiChevronLeft />
        </button>

        <button
          className="w-10 h-10 active:scale-95 transition-all rounded-full bg-white cursor-pointer flex justify-center items-center
            -translate-y-2/4 shadow-xl
            "
          onClick={() => {
            setDirection("right");
            setCurrentImage(
              currentImage === images.length - 1 ? 0 : currentImage + 1
            );
          }}
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
