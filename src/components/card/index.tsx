"use client";

// Styles
import styles from "./styles.module.css";

interface CardProps {
  children?: React.ReactNode;
  elevation: number;
}

export default function Card({ children, elevation }: CardProps) {
  const opacityValues = [0, 0.05, 0.07, 0.08, 0.09, 0.11, 0.12, 0.14, 0.15, 0.16];

  return (
    <div className={styles.main}>
      <div className={`h-full w-full bg-white/[${opacityValues[elevation]}]`}>{children}</div>
    </div>
  );
}
