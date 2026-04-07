"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/language";
import { FaReact, FaNodeJs, FaVuejs, FaPython, FaDocker, FaGitAlt, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFlutter, SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";

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
    <div id="home" className="min-h-screen w-full flex flex-col justify-center items-center relative py-[6rem] px-[6rem] bg-transparent">
      <div className="w-full max-w-[1200px] flex flex-row items-center justify-center gap-[4rem]">
        {/* Left: text block */}
        <div className="ml-[-100px] flex flex-col items-start gap-[1.2rem] flex-1 min-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-[0.7rem] py-[0.5rem] px-[1.4rem] rounded-full border border-[rgba(91,33,182,0.5)] bg-[rgba(91,33,182,0.1)] text-[#a78bfa] text-[1.25rem] tracking-[0.04em] mb-[0.4rem]"
          >
            <span>🚀</span>
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-[clamp(4.2rem,7vw,8.4rem)] font-extrabold leading-none bg-gradient-to-r from-[#3b82f6] to-[#a78bfa] bg-clip-text text-transparent"
          >
            {t.hero.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="flex flex-row items-baseline flex-wrap gap-[0.8rem]"
          >
            <h2 className="text-[clamp(2rem,2.8vw,3.2rem)] font-bold text-white/[0.88] leading-[1.1] whitespace-nowrap">{t.hero.title}</h2>
            <span className="text-[clamp(1.8rem,2.4vw,2.8rem)] text-white/25 font-light">/</span>
            <span className="text-[clamp(1.6rem,2.2vw,2.6rem)] font-medium text-[#7c3aed] whitespace-nowrap">{t.hero.role}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="text-[1.6rem] text-[var(--text-muted)] tracking-[0.01em] leading-[1.6]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            onClick={scrollToNext}
            className="mt-[1.4rem] py-[1.2rem] px-[3rem] bg-[var(--primary)] text-white border-none rounded-[8px] text-[1.6rem] font-semibold cursor-pointer inline-flex items-center gap-[0.8rem] transition-[background,transform] duration-[0.2s] [font-family:inherit] hover:bg-[var(--primary-light)] hover:-translate-y-[2px]"
          >
            <FaRocket className="text-[1.4rem]" />
            {t.hero.cta}
          </motion.button>
        </div>

        {/* Right: scattered tech icons */}
        <motion.div
          className="relative w-[46rem] h-[46rem] shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-[0.5rem] py-[1.1rem] px-[0.9rem] bg-[var(--glass)] border border-[var(--glass-border)] rounded-[12px] cursor-default min-w-[7rem] transition-[background,border-color] duration-[0.2s] backdrop-blur-[4px] hover:bg-white/[0.08] hover:border-white/[0.18] hover:[transform:translate(-50%,calc(-50%_-_5px))]"
              style={{ top: tech.top, left: tech.left }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
            >
              <span className="text-[2.8rem] flex items-center justify-center" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="text-[1.05rem] text-white/60 whitespace-nowrap">{tech.name}</span>
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
        className="absolute bottom-[2.4rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.4rem] bg-transparent border-none cursor-pointer p-[0.4rem] text-white/40 transition-colors duration-[0.2s] hover:text-white/75"
        aria-label="scroll down"
      >
        <div className="animate-rocketBounce">
          <FaRocket className="mb-[10px] text-[1.8rem] block rotate-[135deg]" />
        </div>
        <span className="mt-[10px] text-[1rem] font-semibold tracking-[0.12em] uppercase">Scroll Down</span>
      </motion.button>
    </div>
  );
}
