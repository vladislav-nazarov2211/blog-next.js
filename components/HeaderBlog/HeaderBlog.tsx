"use client";

import { useContext } from "react";
import styles from "./HeaderBlog.module.css";
import HeaderBlogIcon from "./headerBlogIcon.svg";
import { BlogContext } from "@/app/(blog)/my-blog/BlogContextProvider";

export const HeaderBlog = (): JSX.Element => {
  const { gitHubLink } = useContext(BlogContext);
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>.my_blog</h2>
          </div>

          <div>
            <a target="_blank" href={gitHubLink || ""}>
              <HeaderBlogIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
