"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { useLang } from "@/context/language";
import styles from "./styles.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  const { t } = useLang();

  return (
    <div id="about" className={styles.container}>
      <div className={styles.inner}>
        {/* Section header */}
        <motion.div {...fadeUp} className={styles.header}>
          <span className={styles.sectionTag}>{`// ${t.about.title.toLowerCase()}`}</span>
          <h2 className={styles.sectionTitle}>{t.about.title}</h2>
        </motion.div>

        {/* Bio */}
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className={styles.bio}>
          {t.about.bio}
        </motion.p>

        {/* Experience + Education */}
        <div className={styles.columns}>
          {/* Experience */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FaBriefcase className={styles.columnIcon} />
              {t.about.experience}
            </h3>
            <div className={styles.timeline}>
              {t.about.experiences.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  {i < t.about.experiences.length - 1 && <div className={styles.timelineLine} />}
                  <div className={styles.timelineContent}>
                    <span className={styles.itemRole}>{exp.role}</span>
                    <span className={styles.itemCompany}>{exp.company}</span>
                    <div className={styles.itemMeta}>
                      <span>{exp.period}</span>
                      <span className={styles.metaDot}>·</span>
                      <span>{exp.duration}</span>
                    </div>
                    <div className={styles.itemLocation}>
                      <FaMapMarkerAlt className="text-[1.1rem]" />
                      <span>{exp.location}</span>
                    </div>
                    <p className={styles.itemDesc}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FaGraduationCap className={styles.columnIcon} />
              {t.about.education}
            </h3>
            <div className={styles.timeline}>
              {t.about.educations.map((edu, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.itemRole}>{edu.degree}</span>
                    <span className={styles.itemCompany}>{edu.institution}</span>
                    <div className={styles.itemMeta}>
                      <span>{edu.period}</span>
                    </div>
                    <div className={styles.itemLocation}>
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
