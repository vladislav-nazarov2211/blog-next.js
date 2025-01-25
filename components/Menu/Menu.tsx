"use client";

import { AppContext } from "@/context/app.context";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import React, { useContext } from "react";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import classNames from "classnames";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => {
      return (
        <a
          key={p._id}
          href={`/${route}/${p.alias}`}
          className={classNames(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}
        >
          {p.category}
        </a>
      );
    });
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m: MenuItem) => {
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div
                className={classNames(styles.secondLevelBlock, {
                  [styles.firstLevelActive]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m: FirstLevelMenuItem) => {
          return (
            <div key={m.route}>
              <a href={`/${m.route}`}>
                <div
                  className={classNames(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id === firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
              {m.id == firstCategory && buildSecondLevel(m)}
            </div>
          );
        })}
      </>
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
