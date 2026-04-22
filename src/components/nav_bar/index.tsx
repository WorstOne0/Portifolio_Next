"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/language";
// Icons
import { FaRocket, FaUserAstronaut } from "react-icons/fa";
import { TbHome2, TbBrain, TbBriefcase, TbSend } from "react-icons/tb";

const sectionIds = ["home", "about", "skills", "projects", "contact"];
const navDecors = ["{...}", "</>", ">>>", "~/"];

export default function NavBar() {
  const { lang, setLang, t } = useLang();
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollTo = (id: string) => {
    const container = document.getElementById("scroll-container");
    const el = document.getElementById(id);
    if (container && el) {
      container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0);

      let found = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollTop >= el.offsetTop - 140) found = id;
      }
      setActiveSection(found);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", Icon: TbHome2, label: t.nav.home },
    { id: "about", Icon: FaUserAstronaut, label: t.nav.about },
    { id: "skills", Icon: TbBrain, label: t.nav.skills },
    { id: "projects", Icon: TbBriefcase, label: t.nav.projects },
    { id: "contact", Icon: TbSend, label: t.nav.contact },
  ];

  return (
    <div className="h-screen w-[9.5rem] shrink-0 flex flex-col items-center pt-[2rem] pb-[2rem] bg-[rgba(9,11,20,0.88)] border-r border-white/[0.055] backdrop-blur-[14px] relative z-20">
      {/* Rocket logo */}
      <div className="relative w-[6.5rem] h-[6.5rem] flex items-center justify-center shrink-0 mb-[2rem]">
        <Image src="/simplified_logo.png" alt="Logo" fill priority />
        {/* <div className="absolute w-[7rem] h-[7rem] rounded-full [background:radial-gradient(circle,rgba(59,130,246,0.2)_0%,transparent_70%)] animate-logoPulse" />
        <FaRocket className="text-[2.8rem] text-white rotate-[-45deg] [filter:drop-shadow(0_0_8px_rgba(59,130,246,0.8))_drop-shadow(0_0_20px_rgba(91,33,182,0.4))] relative z-[2]" />
        <div className="absolute w-[6px] h-[6px] rounded-full bg-[rgba(250,160,60,0.9)] bottom-[-4px] left-[calc(50%_-_3px)] [box-shadow:0_0_10px_rgba(250,140,40,0.9)] animate-exhaust z-[1]" />
        <div className="absolute w-[4px] h-[4px] rounded-full bg-[rgba(255,200,80,0.7)] bottom-[-10px] left-[calc(50%_-_2px)] [box-shadow:0_0_8px_rgba(255,180,60,0.8)] animate-[exhaust_0.6s_ease-in-out_0.3s_infinite_alternate] z-[1]" /> */}
      </div>

      {/* Nav + progress track */}
      <div className="flex-1 w-full flex flex-row items-stretch min-h-0 pl-[0.8rem] pr-[0.6rem]">
        {/* Progress line */}
        <div className="w-[3px] rounded-[3px] bg-white/[0.08] shrink-0 relative overflow-hidden mr-[0.4rem] self-stretch">
          <div
            className="absolute top-0 left-0 w-full [background:linear-gradient(to_bottom,#3b82f6,#5b21b6)] rounded-[3px] transition-[height] duration-[120ms] ease-linear [box-shadow:0_0_8px_rgba(59,130,246,0.5)]"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Nav buttons */}
        <nav className="flex-1 flex flex-col justify-center min-h-0">
          {navItems.map((item, i) => {
            const { Icon } = item;
            const isActive = item.id === activeSection;
            return (
              <div key={item.id} className="flex flex-col items-center">
                <button
                  className={`flex flex-col items-center justify-center gap-[0.3rem] border-none rounded-[8px] bg-transparent cursor-pointer transition-[background,color] duration-[0.18s] px-[0.4rem] py-[0.75rem] w-full hover:bg-white/[0.055] ${isActive ? "text-white" : "text-white/[0.32] hover:text-white/[0.78]"}`}
                  onClick={() => scrollTo(item.id)}
                  title={item.label}
                >
                  <Icon
                    className={`text-[2rem] transition-[filter] duration-[0.18s] ${isActive ? "[filter:drop-shadow(0_0_6px_rgba(59,130,246,0.8))]" : ""}`}
                  />
                  <span className="text-[0.9rem] font-medium tracking-[0.02em] leading-none">{item.label}</span>
                </button>
                {i < navItems.length - 1 && (
                  <span className="text-[0.78rem] font-mono text-white/[0.13] tracking-[0.02em] leading-none py-[0.35rem] select-none">
                    {navDecors[i]}
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Language toggle */}
      <button
        className="flex flex-col items-center gap-[0.3rem] py-[0.9rem] px-[0.6rem] border-none rounded-[8px] bg-transparent cursor-pointer text-white/[0.45] transition-[background,color] duration-[0.18s] mt-[1.2rem] shrink-0 w-[calc(100%_-_1.2rem)] hover:bg-white/[0.055] hover:text-white/[0.85]"
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      >
        <span className="text-[1.9rem] leading-none">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
        <span className="text-[0.82rem] font-bold tracking-[0.08em]">{lang === "pt" ? "PT-BR" : "EN-US"}</span>
      </button>
    </div>
  );
}
