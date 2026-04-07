"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { useLang } from "@/context/language";

export default function Contact() {
  const { t } = useLang();

  const links = [
    {
      label: t.contact.sendEmail,
      detail: "luccagabriel12@hotmail.com",
      icon: <FaEnvelope />,
      href: "mailto:luccagabriel12@hotmail.com",
      color: "#3b82f6",
    },
    {
      label: t.contact.seeGithub,
      detail: "github.com/WorstOne0",
      icon: <FaGithub />,
      href: "https://github.com/WorstOne0",
      color: "#a78bfa",
    },
    {
      label: t.contact.linkedin,
      detail: "lucca-gabriel-410040154",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/lucca-gabriel-410040154/",
      color: "#0ea5e9",
    },
  ];

  return (
    <div id="contact" className="min-h-screen w-full bg-transparent flex justify-center items-center py-[8rem] px-[6rem]">
      <div className="w-full max-w-[1100px] flex flex-row items-center gap-[5rem]">
        {/* Left column */}
        <div className="flex-1 flex flex-col items-start gap-[2.8rem] min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-[1rem]"
          >
            <span className="text-[1.3rem] text-[#7c3aed] tracking-[0.06em] font-mono">{`// ${t.contact.title.toLowerCase()}`}</span>
            <h2 className="text-[clamp(3rem,5vw,5.2rem)] font-extrabold text-white leading-[1.05]">{t.contact.title}</h2>
            <p className="text-[1.9rem] font-semibold bg-gradient-to-r from-[#3b82f6] to-[#a78bfa] bg-clip-text text-transparent">{t.contact.subtitle}</p>
            <p className="text-[1.5rem] text-[var(--text-muted)] leading-[1.7] max-w-[460px]">{t.contact.description}</p>
          </motion.div>

          {/* Contact rows */}
          <div className="flex flex-col gap-[1.2rem] w-full">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group flex flex-row items-center gap-[1.6rem] py-[1.6rem] px-[2rem] bg-[var(--glass)] border border-[var(--glass-border)] rounded-[14px] no-underline cursor-pointer transition-[background,border-color,transform] duration-[0.2s] hover:bg-white/[0.07] hover:[border-color:var(--row-color,rgba(255,255,255,0.2))] hover:translate-x-[5px]"
                style={{ "--row-color": link.color } as React.CSSProperties}
              >
                <span
                  className="text-[2.2rem] flex items-center justify-center shrink-0 w-[4.2rem] h-[4.2rem] rounded-[10px] bg-white/[0.05]"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </span>
                <div className="flex-1 flex flex-col gap-[0.2rem] min-w-0">
                  <span className="text-[1.5rem] font-semibold text-white/90">{link.label}</span>
                  <span className="text-[1.25rem] text-[var(--text-muted)] whitespace-nowrap overflow-hidden text-ellipsis">{link.detail}</span>
                </div>
                <FaArrowRight className="text-[1.4rem] text-white/[0.28] shrink-0 transition-[color,transform] duration-[0.2s] group-hover:[color:var(--row-color)] group-hover:translate-x-[3px]" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[1.2rem] text-white/20 tracking-[0.04em]"
          >
            Lucca Gabriel · {new Date().getFullYear()}
          </motion.p>
        </div>

        {/* Right column — orbital decoration */}
        <motion.div
          className="flex items-center justify-center shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[42rem] h-[42rem] flex items-center justify-center">
            {/* Glow */}
            <div className="absolute w-[50rem] h-[50rem] rounded-full [background:radial-gradient(circle,rgba(59,130,246,0.1)_0%,rgba(91,33,182,0.06)_45%,transparent_68%)] animate-orbPulse" />

            {/* Ring 3 (outermost) */}
            <div className="absolute w-[40rem] h-[40rem] rounded-full border border-white/[0.07] animate-orbRotate22 after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[8px] after:h-[8px] after:rounded-full after:bg-white/55 after:[box-shadow:0_0_10px_rgba(255,255,255,0.4)]" />

            {/* Ring 2 */}
            <div className="absolute w-[30rem] h-[30rem] rounded-full border border-[rgba(91,33,182,0.22)] animate-orbRotate13r after:content-[''] after:absolute after:top-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#7c3aed] after:[box-shadow:0_0_12px_rgba(124,58,237,0.8),0_0_24px_rgba(124,58,237,0.35)]" />

            {/* Ring 1 (innermost) */}
            <div className="absolute w-[20rem] h-[20rem] rounded-full border border-[rgba(59,130,246,0.3)] animate-orbRotate7 after:content-[''] after:absolute after:top-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-[12px] after:h-[12px] after:rounded-full after:bg-[#3b82f6] after:[box-shadow:0_0_14px_rgba(59,130,246,0.9),0_0_28px_rgba(59,130,246,0.4)]" />

            {/* Core */}
            <div className="absolute w-[11rem] h-[11rem] rounded-full [background:radial-gradient(circle_at_35%_35%,rgba(59,130,246,0.5),rgba(91,33,182,0.35)_60%,rgba(11,94,205,0.2))] [box-shadow:0_0_36px_rgba(59,130,246,0.28),0_0_72px_rgba(91,33,182,0.12)] flex items-center justify-center z-[5]">
              <FaEnvelope className="text-[3.8rem] text-white/[0.88]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
