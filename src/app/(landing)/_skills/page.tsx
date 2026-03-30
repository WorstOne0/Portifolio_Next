"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language";
import { FaReact, FaNodeJs, FaVuejs, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiRabbitmq,
  SiSocketdotio,
  SiExpress,
  SiShadcnui,
  SiQuasar,
  SiGooglemaps,
  SiCplusplus,
} from "react-icons/si";
import { TbApi, TbLayoutDashboard, TbServer, TbDeviceMobile, TbTool } from "react-icons/tb";
import styles from "./styles.module.css";

type Skill = { name: string; icon: React.ReactNode; color: string };
type Category = { key: keyof typeof skillMap; color: string; CatIcon: React.ReactNode };

const skillMap = {
  frontend: [
    { name: "React",       icon: <FaReact />,       color: "#61DAFB" },
    { name: "Next.js",     icon: <SiNextdotjs />,   color: "#ffffff" },
    { name: "Vue.js",      icon: <FaVuejs />,        color: "#4FC08D" },
    { name: "Quasar",      icon: <SiQuasar />,       color: "#1976D2" },
    { name: "JavaScript",  icon: <SiJavascript />,   color: "#F7DF1E" },
    { name: "TypeScript",  icon: <SiTypescript />,   color: "#3178C6" },
    { name: "Tailwind",    icon: <SiTailwindcss />,  color: "#38BDF8" },
    { name: "ShadCN",      icon: <SiShadcnui />,     color: "#ffffff" },
  ] as Skill[],
  backend: [
    { name: "Node.js",     icon: <FaNodeJs />,       color: "#68A063" },
    { name: "Express",     icon: <SiExpress />,       color: "#ffffff" },
    { name: "Python",      icon: <FaPython />,        color: "#FFD43B" },
    { name: "C/C++",       icon: <SiCplusplus />,    color: "#00599C" },
    { name: "RabbitMQ",    icon: <SiRabbitmq />,     color: "#FF6600" },
    { name: "Socket.IO",   icon: <SiSocketdotio />,  color: "#ffffff" },
    { name: "REST API",    icon: <TbApi />,           color: "#a78bfa" },
  ] as Skill[],
  mobile: [
    { name: "Flutter",     icon: <SiFlutter />,      color: "#54C5F8" },
    { name: "Firebase",    icon: <SiFirebase />,     color: "#FFCA28" },
  ] as Skill[],
  tools: [
    { name: "MongoDB",     icon: <SiMongodb />,      color: "#47A248" },
    { name: "Git",         icon: <FaGitAlt />,        color: "#F05032" },
    { name: "Docker",      icon: <FaDocker />,        color: "#2496ED" },
    { name: "Google Maps", icon: <SiGooglemaps />,   color: "#4285F4" },
  ] as Skill[],
};

const categories: Category[] = [
  { key: "frontend", color: "#3b82f6",  CatIcon: <TbLayoutDashboard /> },
  { key: "backend",  color: "#10b981",  CatIcon: <TbServer /> },
  { key: "mobile",   color: "#f59e0b",  CatIcon: <TbDeviceMobile /> },
  { key: "tools",    color: "#8b5cf6",  CatIcon: <TbTool /> },
];

export default function Skills() {
  const { t } = useLang();

  return (
    <div id="skills" className={styles.container}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.sectionTag}>{`// ${t.skills.title.toLowerCase()}`}</span>
          <h2 className={styles.sectionTitle}>{t.skills.title}</h2>
          <p className={styles.sectionSubtitle}>{t.skills.subtitle}</p>
        </motion.div>

        {/* Categories */}
        <div className={styles.categories}>
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={styles.category}
              style={{ "--cat-color": cat.color } as React.CSSProperties}
            >
              {/* Card header */}
              <div className={styles.catHeader}>
                <span className={styles.catIcon} style={{ color: cat.color }}>
                  {cat.CatIcon}
                </span>
                <div className={styles.catTitles}>
                  <h3 className={styles.categoryTitle} style={{ color: cat.color }}>
                    {t.skills.categories[cat.key]}
                  </h3>
                  <p className={styles.categoryDesc}>{t.skills.categoryDesc[cat.key]}</p>
                </div>
                <span className={styles.catCount}>{skillMap[cat.key].length}</span>
              </div>

              <div className={styles.divider} style={{ background: `${cat.color}28` }} />

              {/* Skill badges */}
              <div className={styles.skillsGrid}>
                {skillMap[cat.key].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.08 + i * 0.04 }}
                    className={styles.skillBadge}
                  >
                    <span style={{ color: skill.color }} className={styles.skillIcon}>
                      {skill.icon}
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
