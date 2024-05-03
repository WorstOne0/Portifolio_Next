"use client";

// Next
import { motion } from "framer-motion";
// Styles
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={`${styles.container} text-white`}>
      <div className="flex flex-col">
        <motion.span animate={{ opacity: 1, transition: { duration: 1, delay: 0 } }} className="opacity-0 text-9xl font-bold">
          Hi,
        </motion.span>
        <motion.span animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }} className="opacity-0 text-9xl font-bold">
          {"I'm Lucca"}
        </motion.span>
        <motion.span animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }} className="opacity-0 text-9xl font-bold">
          Software Developer
        </motion.span>
      </div>
      <div className="mt-[3rem]">Computer Engineer - Full-Stack Developer</div>
    </div>
  );
}
