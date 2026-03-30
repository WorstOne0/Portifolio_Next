"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language";
import { FaReact, FaNodeJs, FaVuejs, FaPython, FaDocker, FaGitAlt, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFlutter, SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";
import styles from "./styles.module.css";

// Scattered but non-overlapping positions
const techIcons = [
  { icon: <FaReact />,       name: "React",      color: "#61DAFB", top: "5%",  left: "14%" },
  { icon: <SiNextdotjs />,   name: "Next.js",    color: "#ffffff", top: "4%",  left: "58%" },
  { icon: <FaDocker />,      name: "Docker",     color: "#2496ED", top: "7%",  left: "86%" },
  { icon: <SiMongodb />,     name: "MongoDB",    color: "#47A248", top: "28%", left: "3%"  },
  { icon: <SiTypescript />,  name: "TypeScript", color: "#3178C6", top: "30%", left: "36%" },
  { icon: <SiFlutter />,     name: "Flutter",    color: "#54C5F8", top: "26%", left: "80%" },
  { icon: <FaVuejs />,       name: "Vue.js",     color: "#4FC08D", top: "57%", left: "14%" },
  { icon: <FaNodeJs />,      name: "Node.js",    color: "#68A063", top: "55%", left: "58%" },
  { icon: <SiTailwindcss />, name: "Tailwind",   color: "#38BDF8", top: "55%", left: "92%" },
  { icon: <SiFirebase />,    name: "Firebase",   color: "#FFCA28", top: "82%", left: "4%"  },
  { icon: <FaPython />,      name: "Python",     color: "#FFD43B", top: "84%", left: "42%" },
  { icon: <FaGitAlt />,      name: "Git",        color: "#F05032", top: "82%", left: "78%" },
];

export default function Home() {
  const { t } = useLang();

  const scrollToNext = () => {
    const container = document.getElementById("scroll-container");
    const el = document.getElementById("about");
    if (container && el) container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <div id="home" className={styles.container}>
      <div className={styles.content}>
        {/* Left: text block */}
        <div className={styles.textBlock}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.badge}
          >
            <span>🚀</span>
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className={styles.name}
          >
            {t.hero.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className={styles.titleGroup}
          >
            <h2 className={styles.title}>{t.hero.title}</h2>
            <span className={styles.roleSep}>/</span>
            <span className={styles.role}>{t.hero.role}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className={styles.subtitle}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            onClick={scrollToNext}
            className={styles.ctaButton}
          >
            <FaRocket className={styles.ctaRocket} />
            {t.hero.cta}
          </motion.button>
        </div>

        {/* Right: scattered tech icons — no lines */}
        <motion.div
          className={styles.iconsCanvas}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              className={styles.iconCard}
              style={{ top: tech.top, left: tech.left }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
            >
              <span className={styles.iconWrapper} style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className={styles.iconLabel}>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        onClick={scrollToNext}
        className={styles.scrollIndicator}
        aria-label="scroll down"
      >
        <div className={styles.scrollRocketWrap}>
          <FaRocket className={styles.scrollRocket} />
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </motion.button>
    </div>
  );
}
