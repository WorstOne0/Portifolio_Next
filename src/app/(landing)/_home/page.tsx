// Styles
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={`${styles.container} text-white`}>
      <div>
        <svg height="40" width="200" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="30" fill="none" stroke="red" font-size="35">
            I love SVG!
          </text>
        </svg>
      </div>
      <div>O que eu faço</div>
    </div>
  );
}
