"use client";

// Next
import { motion } from "framer-motion";

import spaceBackground from "../../../../public/space_background.png";

export default function Home() {
  return (
    <div className="min-h-full h-full w-full flex flex-col justify-center items-center" style={{ backgroundImage: `url(${spaceBackground.src})` }}>
      <div className="flex flex-col">
        <motion.span animate={{ opacity: 1, transition: { duration: 1, delay: 0 } }} className="opacity-0 text-9xl font-bold text-white">
          Hi,
        </motion.span>
        <motion.span animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }} className="opacity-0 text-9xl font-bold text-white">
          {"I'm Lucca"}
        </motion.span>
        <motion.span animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }} className="opacity-0 text-9xl font-bold text-white">
          Software Developer
        </motion.span>
      </div>
      <div className="mt-[3rem]">Computer Engineer - Full-Stack Developer</div>
    </div>
  );
}
