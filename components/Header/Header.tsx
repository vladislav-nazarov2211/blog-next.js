import styles from "./Header.module.css";
import HeaderIcon from "./headerIcon.svg";

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>.my_blog</h2>
          </div>

          <div>
            <a target="_blank" href="https://github.com/vladislav-nazarov2211">
              <HeaderIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
