import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Footer } from "@/components/Footer/Footer";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <div className={styles.body}>{children}</div>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
