"use client";
import { createContext, ReactNode } from "react";

type BlogContextType = {
  gitHubLink: string | null;
};

export const BlogContext = createContext<BlogContextType>({
  gitHubLink: null,
});

export const BlogContextProvider = ({
  gitHubLink,
  children,
}: BlogContextType & {
  children: ReactNode;
}) => {
  return (
    <BlogContext.Provider value={{ gitHubLink }}>
      {children}
    </BlogContext.Provider>
  );
};
