"use client";

import { useState, useEffect } from "react";
import { FaRocket, FaUserAstronaut } from "react-icons/fa";
import { TbHome2, TbBrain, TbBriefcase, TbSend } from "react-icons/tb";
import { useLang } from "@/context/language";
import styles from "./styles.module.css";

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
    { id: "home",     Icon: TbHome2,        label: t.nav.home },
    { id: "about",    Icon: FaUserAstronaut, label: t.nav.about },
    { id: "skills",   Icon: TbBrain,         label: t.nav.skills },
    { id: "projects", Icon: TbBriefcase,     label: t.nav.projects },
    { id: "contact",  Icon: TbSend,          label: t.nav.contact },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Rocket logo */}
      <div className={styles.logo}>
        <div className={styles.logoGlow} />
        <FaRocket className={styles.logoRocket} />
        <div className={styles.exhaustA} />
        <div className={styles.exhaustB} />
      </div>

      {/* Nav + progress track */}
      <div className={styles.navArea}>
        {/* Continuous progress line */}
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Nav buttons with decorators between */}
        <nav className={styles.navList}>
          {navItems.map((item, i) => {
            const { Icon } = item;
            const isActive = item.id === activeSection;
            return (
              <div key={item.id} className={styles.navGroup}>
                <button
                  className={[styles.navBtn, isActive ? styles.navBtnActive : ""].join(" ")}
                  onClick={() => scrollTo(item.id)}
                  title={item.label}
                >
                  <Icon className={styles.navIcon} />
                  <span className={styles.navLabel}>{item.label}</span>
                </button>
                {i < navItems.length - 1 && (
                  <span className={styles.navDecor}>{navDecors[i]}</span>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Language toggle */}
      <button
        className={styles.langToggle}
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      >
        <span className={styles.langFlag}>{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
        <span className={styles.langLabel}>{lang === "pt" ? "PT-BR" : "EN-US"}</span>
      </button>
    </div>
  );
}
