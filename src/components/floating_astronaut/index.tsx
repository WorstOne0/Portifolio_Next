"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";
import styles from "./styles.module.css";

export default function FloatingAstronaut() {
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainerEl(document.getElementById("scroll-container"));
  }, []);

  const { scrollYProgress } = useScroll({
    container: containerEl ? { current: containerEl } : undefined,
  });

  // Move astronaut vertically as user scrolls: starts at 10vh, ends at 80vh
  const y = useTransform(scrollYProgress, [0, 1], ["10vh", "75vh"]);

  return (
    <motion.div
      className={styles.wrapper}
      style={{ y }}
      aria-hidden="true"
    >
      {/* Tether line above */}
      <div className={styles.tether} />

      {/* Astronaut */}
      <motion.div
        className={styles.astronaut}
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
        <FaUserAstronaut className={styles.icon} />
        {/* Glow */}
        <div className={styles.glow} />
      </motion.div>

      {/* Tether line below */}
      <div className={styles.tetherBottom} />
    </motion.div>
  );
}
