import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Footer } from "@/components/Footer/Footer";
import styles from "./layout.module.css";
import { AppContextProvider } from "@/context/app.context";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { API } from "../api";
import { MenuItem } from "@/interfaces/menu.interface";

export const metadata: Metadata = {
  title: "blog",
};

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ "content-type": "application/json" }),
  });
  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenu(0);
  return (
    <html lang="ru">
      <body>
        <AppContextProvider
          menu={menu}
          firstCategory={TopLevelCategory.Courses}
        >
          <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer} />
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
