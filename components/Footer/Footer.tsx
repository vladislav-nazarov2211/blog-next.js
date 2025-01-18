import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer = ({
  className,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <footer className={classNames(className, styles.footer)}>
      <div>
        OwlTop &copy; 2020 - {format(new Date(), "yyyy")} Все права защищены
      </div>

      <a href="" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="" target="_blank">
        Политика конфеденциальности
      </a>
    </footer>
  );
};
