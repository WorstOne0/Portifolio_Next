"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.main}>
      {/* Rocket */}
      <motion.div
        className={styles.rocketWrap}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -16] }}
        transition={{ duration: 2.8, times: [0, 0.18, 0.72, 1], ease: "easeInOut" }}
      >
        <div className={styles.exhaustA} />
        <div className={styles.exhaustB} />
        <FaRocket className={styles.rocketIcon} />
        <div className={styles.rocketGlow} />
      </motion.div>

      {/* Name — fades first */}
      <motion.span
        className={styles.nameText}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Lucca Gabriel
      </motion.span>

      {/* PORTIFOLIO — fades after */}
      <motion.span
        className={styles.portfolioText}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        PORTIFOLIO
      </motion.span>
    </div>
  );
}
