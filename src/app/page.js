import Image from "next/image";
import styles from "./page.module.css";
import Home from "./pages/home/page";

export default function Main() {
  return (
    <main className={styles.main}>
        <Home />
    </main>
  );
}
