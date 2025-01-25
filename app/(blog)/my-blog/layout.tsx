import type { Metadata } from "next";
import "../../globals.css";
import { HeaderBlog } from "@/components/HeaderBlog/HeaderBlog";
import { BlogContextProvider } from "./BlogContextProvider";

export const metadata: Metadata = {
  title: "blog",
};

async function getLink(): Promise<string> {
  // имитация запроса
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify("test"),
    headers: {},
  });
  res.json();
  return "https://github.com/vladislav-nazarov2211";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gitHubLink = await getLink();
  return (
    <html lang="ru">
      <body>
        <BlogContextProvider gitHubLink={gitHubLink}>
          <HeaderBlog />
          {children}
        </BlogContextProvider>
      </body>
    </html>
  );
}
