import { motion } from "framer-motion";
// Styles
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.main}>
      <motion.span animate={{ opacity: 0, transition: { duration: 1, delay: 1.2 } }} className="text-white font-extralight italic">
        Lucca Gabriel
      </motion.span>
      <motion.span animate={{ opacity: 0, transition: { duration: 0.8, delay: 1.6 } }} className="text-white bold ml-5">
        PORTIFOLIO
      </motion.span>
    </div>
  );
}
