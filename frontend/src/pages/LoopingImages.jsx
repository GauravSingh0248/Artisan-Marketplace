// https://www.dimi.me/lab/looping-images
// npm install framer-motion
"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function LoopingImages(){
  const lastIndex = images.length - 1;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[500px] h-[500px]">
        {images.map((_, index) =>
          index === lastIndex ? null : (
            <Square index={index} key={index} />
          )
        )}

        <Square index={lastIndex}>
          <SquareWithOffset index={0} parentIndex={lastIndex} />
        </Square>
      </div>
    </div>
  );
}

function SquareWithOffset({ index, parentIndex }) {
  const image = images[index];
  const offsetVal = useMotionValue(0);

  useEffect(() => {
    const controls = animate(offsetVal, 1, {
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      duration: 7,
    });
    return () => controls.stop();
  }, [offsetVal]);

  const x = useTransform(offsetVal, (offset) => {
    const firstAngle =
      ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle =
      ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    return Math.cos(firstAngle) * 180 - Math.cos(lastAngle) * 180;
  });

  const y = useTransform(offsetVal, (offset) => {
    const firstAngle =
      ((getPathOffset(index) + offset) % 1) * Math.PI * 2;
    const lastAngle =
      ((getPathOffset(parentIndex) + offset) % 1) * Math.PI * 2;

    return Math.sin(firstAngle) * 180 - Math.sin(lastAngle) * 180;
  });

  return (
    <motion.div
      className="absolute inset-0 rounded-lg overflow-hidden"
      style={{ x, y }}
    >
      <img
        src={image}
        alt={`Square ${index}`}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </motion.div>
  );
}

function Square({ index, children }) {
  const image = images[index];
  const pathOffset = useMotionValue(getPathOffset(index));

  useEffect(() => {
    const controls = animate(pathOffset, pathOffset.get() + 1, {
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      duration: 7,
    });
    return () => controls.stop();
  }, [pathOffset]);

  const x = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    // return Math.cos(angle) * 180;
    return Math.cos(angle) * 220;
  });

  const y = useTransform(pathOffset, (offset) => {
    const angle = (offset % 1) * Math.PI * 2;
    // return Math.sin(angle) * 180;
    return Math.sin(angle) * 220;
  });

  return (
    <motion.div
      className="absolute rounded-lg overflow-hidden w-[180px] h-[180px]"
      // className="absolute rounded-lg overflow-hidden w-[150px] h-[150px]"
      style={{
        left: "calc(50% - 75px)",
        top: "calc(50% - 75px)",
        x,
        y,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: index * 0.12 + 0.35,
        ease: "easeOut",
      }}
    >
      <img
        src={image}
        alt={`Square ${index}`}
        className="w-full h-full object-cover"
        draggable={false}
      />

      <motion.div
        className="absolute inset-0 rounded-lg overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: index * 0.12 + 0.35,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Dynamic offset
function getPathOffset(index) {
  return index / images.length;
}

// Images
const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img9.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img10.jpg",
  "/images/img8.jpg",
  // "https://dr.savee-cdn.com/things/6/6/a916d6265050d2c6615d0b.webp",
  // "https://dr.savee-cdn.com/things/6/7/bcd2173c9caf1c3c39dcf9.webp",
  // "https://dr.savee-cdn.com/things/6/7/be2b2c3c9caf1c4aecfd74.webp",
  // "https://dr.savee-cdn.com/things/6/7/c07c103c9caf1c627865f0.webp",
  // "https://dr.savee-cdn.com/things/6/7/bcbca53c9caf1c3b26ec02.webp",
  // "https://dr.savee-cdn.com/things/6/7/c0a82c3c9caf1c648015d3.webp",
  // "https://dr.savee-cdn.com/things/6/7/bc77763c9caf1c370b34ec.webp",
];