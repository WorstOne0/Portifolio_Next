"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { useLang } from "@/context/language";
import styles from "./styles.module.css";

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
    <div id="contact" className={styles.container}>
      <div className={styles.inner}>
        {/* Left column */}
        <div className={styles.leftCol}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <span className={styles.sectionTag}>{`// ${t.contact.title.toLowerCase()}`}</span>
            <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
            <p className={styles.subtitle}>{t.contact.subtitle}</p>
            <p className={styles.description}>{t.contact.description}</p>
          </motion.div>

          {/* Contact rows */}
          <div className={styles.linksStack}>
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
                className={styles.contactRow}
                style={{ "--row-color": link.color } as React.CSSProperties}
              >
                <span className={styles.rowIconWrap} style={{ color: link.color }}>
                  {link.icon}
                </span>
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>{link.label}</span>
                  <span className={styles.rowDetail}>{link.detail}</span>
                </div>
                <FaArrowRight className={styles.rowArrow} />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={styles.footer}
          >
            Lucca Gabriel · {new Date().getFullYear()}
          </motion.p>
        </div>

        {/* Right column — orbital decoration */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.orbital}>
            <div className={styles.orbGlow} />
            <div className={styles.ring3} />
            <div className={styles.ring2} />
            <div className={styles.ring1} />
            <div className={styles.orbCore}>
              <FaEnvelope className={styles.orbIcon} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
