"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

export default function FloatingAstronaut() {
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainerEl(document.getElementById("scroll-container"));
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerEl ? { current: containerEl } : undefined,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "75vh"]);

  return (
    <motion.div
      className="fixed right-[2.4rem] top-0 z-[15] flex flex-col items-center pointer-events-none select-none"
      style={{ y }}
      aria-hidden="true"
    >
      {/* Tether line above */}
      <div className="w-px h-[6rem] bg-gradient-to-b from-transparent to-white/[0.15]" />

      {/* Astronaut */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          rotate: [0, 8, -6, 4, -8, 0],
          y: [0, -8, 4, -4, 6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaUserAstronaut className="text-[3.2rem] text-white/60 [filter:drop-shadow(0_0_6px_rgba(59,130,246,0.5))_drop-shadow(0_2px_12px_rgba(0,0,0,0.4))]" />
        <div className="absolute w-[6rem] h-[6rem] rounded-full pointer-events-none [background:radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
      </motion.div>

      {/* Tether line below */}
      <div className="w-px h-[4rem] bg-gradient-to-b from-white/10 to-transparent" />
    </motion.div>
  );
}
