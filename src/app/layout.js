import NavBar from "@components/layout/NavBar/NavBar";
import Footer from "@components/layout/Footer/Footer";
import "@styles/global.css";

export const metadata = {
  title: "Chrono Pilferer's Blog",
  description: "A story of stealing time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="dark">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}