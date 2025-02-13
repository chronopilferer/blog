import NavBar from "@components/layout/NavBar/NavBar";
import Footer from "@components/layout/Footer/Footer";
import "@styles/global.css";
import styles from "@styles/RootLayout.module.css";
import 'katex/dist/katex.min.css';  

export const metadata = {
  title: "Chrono Pilferer's Blog",
  description: "A story of stealing time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavBar />
        <main className={styles["main-content"]}>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
