import type { Metadata } from "next";
import "../../globals.css";
import { HeaderBlog } from "@/components/HeaderBlog/HeaderBlog";

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
        <HeaderBlog />
        {children}
      </body>
    </html>
  );
}
