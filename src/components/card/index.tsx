// Styles
import styles from "./styles.module.css";

export default function Card({ children, elevation }: { children: React.ReactNode | null; elevation: number }) {
  const opacityValues = [0, 0.05, 0.07, 0.08, 0.09, 1.1, 1.2, 1.4, 1.5, 1.6];

  return (
    <div className={styles.main}>
      <div className="h-full w-full bg-white" style={{ opacity: opacityValues[elevation] }}>
        {children}
      </div>
    </div>
  );
}
