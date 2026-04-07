"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { useLang } from "@/context/language";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  const { t } = useLang();

  return (
    <div id="about" className="min-h-screen w-full bg-[var(--section-alt)] flex justify-center items-start py-[8rem] px-[8rem]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[3.2rem]">
        {/* Section header */}
        <motion.div {...fadeUp} className="flex flex-col gap-[0.6rem]">
          <span className="text-[1.3rem] text-[var(--accent-light)] tracking-[0.06em] font-mono">{`// ${t.about.title.toLowerCase()}`}</span>
          <h2 className="text-[clamp(2.8rem,4vw,4.2rem)] font-extrabold text-white leading-[1.1]">{t.about.title}</h2>
        </motion.div>

        {/* Bio */}
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-[1.65rem] text-[var(--text-muted)] leading-[1.75] max-w-[780px]">
          {t.about.bio}
        </motion.p>

        {/* Experience + Education */}
        <div className="grid grid-cols-2 gap-[4rem] items-start">
          {/* Experience */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-[2rem]">
            <h3 className="flex items-center gap-[1rem] text-[1.8rem] font-bold text-white/90 pb-[1rem] border-b border-[var(--glass-border)]">
              <FaBriefcase className="text-[var(--primary-light)] text-[1.8rem]" />
              {t.about.experience}
            </h3>
            <div className="flex flex-col gap-0">
              {t.about.experiences.map((exp, i) => (
                <div key={i} className="flex flex-row gap-[1.6rem] relative pb-[2.8rem]">
                  <div className="w-[12px] h-[12px] rounded-full bg-[var(--primary)] border-2 border-[var(--primary-light)] shrink-0 mt-[0.4rem] relative z-[1]" />
                  {i < t.about.experiences.length - 1 && (
                    <div className="absolute left-[5px] top-[14px] bottom-0 w-[2px] [background:linear-gradient(to_bottom,var(--primary),transparent)]" />
                  )}
                  <div className="flex flex-col gap-[0.4rem] flex-1">
                    <span className="text-[1.6rem] font-bold text-white">{exp.role}</span>
                    <span className="text-[1.45rem] font-semibold text-[var(--primary-light)]">{exp.company}</span>
                    <div className="flex items-center gap-[0.5rem] text-[1.3rem] text-[var(--text-muted)]">
                      <span>{exp.period}</span>
                      <span className="opacity-50">·</span>
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem] text-[1.3rem] text-[var(--text-muted)] opacity-75">
                      <FaMapMarkerAlt className="text-[1.1rem]" />
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-[1.45rem] text-[var(--text-muted)] leading-[1.65] mt-[0.4rem]">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-[2rem]">
            <h3 className="flex items-center gap-[1rem] text-[1.8rem] font-bold text-white/90 pb-[1rem] border-b border-[var(--glass-border)]">
              <FaGraduationCap className="text-[var(--primary-light)] text-[1.8rem]" />
              {t.about.education}
            </h3>
            <div className="flex flex-col gap-0">
              {t.about.educations.map((edu, i) => (
                <div key={i} className="flex flex-row gap-[1.6rem] relative pb-[2.8rem]">
                  <div className="w-[12px] h-[12px] rounded-full bg-[var(--primary)] border-2 border-[var(--primary-light)] shrink-0 mt-[0.4rem] relative z-[1]" />
                  <div className="flex flex-col gap-[0.4rem] flex-1">
                    <span className="text-[1.6rem] font-bold text-white">{edu.degree}</span>
                    <span className="text-[1.45rem] font-semibold text-[var(--primary-light)]">{edu.institution}</span>
                    <div className="flex items-center gap-[0.5rem] text-[1.3rem] text-[var(--text-muted)]">
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem] text-[1.3rem] text-[var(--text-muted)] opacity-75">
                      <FaMapMarkerAlt className="text-[1.1rem]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
