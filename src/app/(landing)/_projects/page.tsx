"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLang } from "@/context/language";
import styles from "./styles.module.css";

export default function Projects() {
  const { t } = useLang();

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.sectionTag}>{`// ${t.projects.title.toLowerCase()}`}</span>
          <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
          <p className={styles.sectionSubtitle}>{t.projects.subtitle}</p>
        </motion.div>

        {/* Projects */}
        <div className={styles.projectsList}>
          {t.projects.items.map((project, i) => {
            const isEven = i % 2 === 1; // alternate: odd index flips panels
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className={[styles.projectCard, isEven ? styles.projectCardFlipped : ""].join(" ")}
                style={{ "--accent": project.accent } as React.CSSProperties}
              >
                {/* Visual panel */}
                <div className={`${styles.leftPanel} bg-gradient-to-br ${project.color}`}>
                  <span className={styles.ghostNumber}>{project.number}</span>
                  <div className={styles.leftContent}>
                    <span className={styles.projectIndex}>Project {project.number}</span>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <div className={styles.linkGroup}>
                      {project.site && (
                        <a href={project.site} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                          <FaExternalLinkAlt className={styles.linkIcon} />
                          {t.projects.visitSite}
                        </a>
                      )}
                      {project.links.front && (
                        <a href={project.links.front} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                          <FaGithub className={styles.linkIcon} /> Front-end
                        </a>
                      )}
                      {project.links.backend && (
                        <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                          <FaGithub className={styles.linkIcon} /> Back-end
                        </a>
                      )}
                      {project.links.dashboard && (
                        <a href={project.links.dashboard} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                          <FaGithub className={styles.linkIcon} /> Dashboard
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={styles.gridOverlay} />
                </div>

                {/* Info panel */}
                <div className={styles.rightPanel}>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.techSection}>
                    <span className={styles.techLabel}>Stack</span>
                    <div className={styles.techBadges}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={styles.techBadge}
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
