import styles from "./Home.module.css"; 
import 'katex/dist/katex.min.css';

export default function HomeLayout({ children }) {
  return (
    <>
      <main className={styles["main-layout"]}>
        {children}
      </main>
    </>
  );
}