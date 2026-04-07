"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLang } from "@/context/language";

export default function Projects() {
  const { t } = useLang();

  return (
    <div id="projects" className="min-h-screen w-full bg-[var(--section-alt)] flex justify-center items-start py-[8rem] px-[8rem]">
      <div className="w-full max-w-[1100px] flex flex-col gap-[4rem]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[0.8rem]"
        >
          <span className="text-[1.3rem] text-[#7c3aed] tracking-[0.06em] font-mono">{`// ${t.projects.title.toLowerCase()}`}</span>
          <h2 className="text-[clamp(2.8rem,4vw,4.2rem)] font-extrabold text-white leading-[1.1]">{t.projects.title}</h2>
          <p className="text-[1.6rem] text-[var(--text-muted)]">{t.projects.subtitle}</p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-[2.8rem]">
          {t.projects.items.map((project, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className={`grid rounded-[20px] overflow-hidden border border-white/[0.09] transition-[transform,box-shadow] duration-[0.28s] [box-shadow:0_4px_24px_rgba(0,0,0,0.25)] hover:-translate-y-[5px] hover:[box-shadow:0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_var(--accent,rgba(255,255,255,0.1))] ${isEven ? "[grid-template-columns:1fr_42%]" : "[grid-template-columns:42%_1fr]"}`}
                style={{ "--accent": project.accent } as React.CSSProperties}
              >
                {/* Visual panel */}
                <div className={`relative py-[4rem] px-[3.2rem] flex flex-col justify-end min-h-[28rem] overflow-hidden bg-gradient-to-br ${project.color} ${isEven ? "order-2" : "order-1"}`}>
                  <span className="absolute top-[-2rem] right-[-1rem] text-[20rem] font-black text-white/[0.05] leading-none select-none pointer-events-none tracking-[-0.06em]">
                    {project.number}
                  </span>
                  <div className="relative z-[2] flex flex-col gap-[1.4rem]">
                    <span className="text-[1.2rem] font-semibold tracking-[0.12em] uppercase text-white/55 font-mono">
                      Project {project.number}
                    </span>
                    <h3 className="text-[clamp(2.8rem,3.2vw,4rem)] font-extrabold text-white leading-[1.05] [text-shadow:0_2px_16px_rgba(0,0,0,0.4)]">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-[0.8rem]">
                      {project.site && (
                        <a href={project.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[0.55rem] py-[0.65rem] px-[1.4rem] text-[1.3rem] font-semibold rounded-[8px] no-underline bg-black/[0.38] border border-white/[0.22] text-white/90 backdrop-blur-[8px] transition-[background,border-color,transform] duration-[0.18s] [font-family:inherit] cursor-pointer hover:bg-white/[0.18] hover:border-white/[0.45] hover:-translate-y-[1px]">
                          <FaExternalLinkAlt className="text-[1.2rem]" />
                          {t.projects.visitSite}
                        </a>
                      )}
                      {project.links.front && (
                        <a href={project.links.front} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[0.55rem] py-[0.65rem] px-[1.4rem] text-[1.3rem] font-semibold rounded-[8px] no-underline bg-black/[0.38] border border-white/[0.22] text-white/90 backdrop-blur-[8px] transition-[background,border-color,transform] duration-[0.18s] [font-family:inherit] cursor-pointer hover:bg-white/[0.18] hover:border-white/[0.45] hover:-translate-y-[1px]">
                          <FaGithub className="text-[1.2rem]" /> Front-end
                        </a>
                      )}
                      {project.links.backend && (
                        <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[0.55rem] py-[0.65rem] px-[1.4rem] text-[1.3rem] font-semibold rounded-[8px] no-underline bg-black/[0.38] border border-white/[0.22] text-white/90 backdrop-blur-[8px] transition-[background,border-color,transform] duration-[0.18s] [font-family:inherit] cursor-pointer hover:bg-white/[0.18] hover:border-white/[0.45] hover:-translate-y-[1px]">
                          <FaGithub className="text-[1.2rem]" /> Back-end
                        </a>
                      )}
                      {project.links.dashboard && (
                        <a href={project.links.dashboard} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[0.55rem] py-[0.65rem] px-[1.4rem] text-[1.3rem] font-semibold rounded-[8px] no-underline bg-black/[0.38] border border-white/[0.22] text-white/90 backdrop-blur-[8px] transition-[background,border-color,transform] duration-[0.18s] [font-family:inherit] cursor-pointer hover:bg-white/[0.18] hover:border-white/[0.45] hover:-translate-y-[1px]">
                          <FaGithub className="text-[1.2rem]" /> Dashboard
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />
                </div>

                {/* Info panel */}
                <div className={`py-[4rem] px-[3.6rem] flex flex-col justify-center gap-[2.8rem] bg-white/[0.03] ${isEven ? "order-1" : "order-2"}`}>
                  <p className="text-[1.5rem] text-[var(--text-muted)] leading-[1.8]">{project.description}</p>
                  <div className="flex flex-col gap-[1rem]">
                    <span className="text-[1.1rem] font-bold tracking-[0.1em] uppercase text-white/25">Stack</span>
                    <div className="flex flex-wrap gap-[0.7rem]">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="py-[0.4rem] px-[1.1rem] text-[1.2rem] font-medium border rounded-[6px] whitespace-nowrap"
                          style={{
                            borderColor: `${project.accent}35`,
                            color: project.accent,
                            background: `${project.accent}0d`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
