"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="h-full w-full bg-[var(--background-dark)] flex flex-col justify-center items-center gap-[1rem]">
      {/* Logo image */}
      <motion.div
        className="relative flex items-center justify-center mb-[1.8rem]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <Image src="/simplified_logo.png" alt="Logo" width={200} height={200} priority />
      </motion.div>

      {/* Name — fades first */}
      <motion.span
        className="text-white/90 text-[2.2rem] font-light italic tracking-[0.15rem] mt-[1rem]"
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Lucca Gabriel
      </motion.span>

      {/* PORTIFOLIO — fades after */}
      <motion.span
        className="text-white/75 text-[1.4rem] font-bold tracking-[0.35rem]"
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        PORTIFOLIO
      </motion.span>
    </div>
  );
}

// Old rocket logo:
// import { FaRocket } from "react-icons/fa";
//
//       <motion.div
//         className="relative flex items-center justify-center mb-[1.8rem]"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -16] }}
//         transition={{ duration: 2.8, times: [0, 0.18, 0.72, 1], ease: "easeInOut" }}
//       >
//         <div className="absolute w-[8px] h-[8px] rounded-full pointer-events-none z-[1] bg-[rgba(250,160,60,0.85)] bottom-[-8px] left-[calc(50%_-_4px)] [box-shadow:0_0_14px_rgba(250,140,40,0.9)] animate-exhaustPulse" />
//         <div className="absolute w-[5px] h-[5px] rounded-full pointer-events-none z-[1] bg-[rgba(255,200,80,0.7)] bottom-[-16px] left-[calc(50%_-_2.5px)] [box-shadow:0_0_10px_rgba(255,180,60,0.8)] animate-[exhaustPulse_0.6s_ease-in-out_0.3s_infinite_alternate]" />
//         <FaRocket className="text-[7.2rem] text-white [filter:drop-shadow(0_0_18px_rgba(59,130,246,0.85))_drop-shadow(0_0_40px_rgba(91,33,182,0.5))] rotate-[-45deg] relative z-[2]" />
//         <div className="absolute w-[12rem] h-[12rem] rounded-full pointer-events-none [background:radial-gradient(circle,rgba(59,130,246,0.22)_0%,rgba(91,33,182,0.12)_45%,transparent_70%)] animate-glowPulse" />
//       </motion.div>
