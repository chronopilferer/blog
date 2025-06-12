import styles from "./Home.module.css"; 

export default function HomeLayout({ children }) {
  return (
    <>
      <main className={styles["main-layout"]}>
        {children}
      </main>
    </>
  );
}