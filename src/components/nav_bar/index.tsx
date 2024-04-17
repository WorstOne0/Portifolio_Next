import { Card } from "@/components";
// Styles
import styles from "./styles.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Card elevation={1}>
        <div>Text</div>
      </Card>
    </div>
  );
}
