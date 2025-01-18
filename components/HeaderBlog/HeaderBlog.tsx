import styles from "./HeaderBlog.module.css";
import HeaderBlogIcon from "./headerBlogIcon.svg";

export const HeaderBlog = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>.my_blog</h2>
          </div>

          <div>
            <a target="_blank" href="https://github.com/vladislav-nazarov2211">
              <HeaderBlogIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
