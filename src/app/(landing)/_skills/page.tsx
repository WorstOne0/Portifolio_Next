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
    <div id="skills" className="min-h-screen w-full bg-transparent flex justify-center items-start py-[8rem] px-[8rem]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[4rem]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[0.8rem]"
        >
          <span className="text-[1.3rem] text-[#7c3aed] tracking-[0.06em] font-mono">{`// ${t.skills.title.toLowerCase()}`}</span>
          <h2 className="text-[clamp(2.8rem,4vw,4.2rem)] font-extrabold text-white leading-[1.1]">{t.skills.title}</h2>
          <p className="text-[1.6rem] text-[var(--text-muted)]">{t.skills.subtitle}</p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-[2.4rem]">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="flex flex-col gap-0 p-[2.8rem] bg-[var(--glass)] border border-[var(--glass-border)] rounded-[18px] [border-top:3px_solid_var(--cat-color)] transition-[border-color,box-shadow] duration-[0.2s] hover:[box-shadow:0_8px_32px_rgba(0,0,0,0.25)] hover:[border-color:var(--cat-color)]"
              style={{ "--cat-color": cat.color } as React.CSSProperties}
            >
              {/* Card header */}
              <div className="flex flex-row items-center gap-[1.2rem] mb-[1.6rem]">
                <span className="text-[2.8rem] flex items-center shrink-0" style={{ color: cat.color }}>
                  {cat.CatIcon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[1.6rem] font-bold tracking-[0.04em] uppercase leading-[1.2]" style={{ color: cat.color }}>
                    {t.skills.categories[cat.key]}
                  </h3>
                  <p className="text-[1.25rem] text-[var(--text-muted)] mt-[0.25rem] leading-[1.3]">{t.skills.categoryDesc[cat.key]}</p>
                </div>
                <span className="text-[2.6rem] font-extrabold text-white/[0.06] font-mono shrink-0 leading-none">
                  {skillMap[cat.key].length}
                </span>
              </div>

              <div className="h-px w-full mb-[2rem] rounded-[1px]" style={{ background: `${cat.color}28` }} />

              {/* Skill badges */}
              <div className="flex flex-wrap gap-[0.9rem]">
                {skillMap[cat.key].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.08 + i * 0.04 }}
                    className="inline-flex items-center gap-[0.65rem] py-[0.65rem] px-[1.3rem] bg-white/[0.04] border border-white/[0.09] rounded-[8px] cursor-default transition-[background,border-color,transform] duration-[0.18s] hover:bg-white/[0.09] hover:border-white/20 hover:-translate-y-[2px]"
                  >
                    <span className="text-[1.7rem] flex items-center" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="text-[1.35rem] text-white/80 whitespace-nowrap">{skill.name}</span>
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
