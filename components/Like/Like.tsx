"use client";

import styles from "./Like.module.css";
import { useState } from "react";
import LikeIcon from "./LikeIcon.svg";
import classNames from "classnames";
import { LikeProps } from "./Like.props";
import { cardType } from "../Posts/dataType";

// компонент кнопка-like под карточкой поста
export const Like = ({ itemID, setCards }: LikeProps): JSX.Element => {
  // переключатель нажата/нет кнопка с лайком, при нажатии отправляется фиктивный запрос на сервер, в случае успеха кнопка становится синей, счетчик лайков увеличивается + 1
  const [isActive, setIsActive] = useState<boolean>(false);
  // прелоадер для запроса на сервер
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // обработчик клика по лайку
  const clickHandler = () => {
    // включаем прелоадер
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify("test"),
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // переключаем кнопку на активную/не активную
          setIsActive(!isActive);
          // перезапишем state, найдем текущую карточку и обновим значение счетчика
          setCards((prev: Array<cardType>): Array<cardType> => {
            return prev.map((el: cardType) => {
              if (el.id === itemID) {
                return {
                  ...el,
                  likesCount: (() => {
                    if (el?.likesCount !== undefined) {
                      return isActive ? el?.likesCount - 1 : el?.likesCount + 1;
                    } else {
                      return 1;
                    }
                  })(),
                };
              } else {
                return el;
              }
            });
          });
        }
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      className={classNames(styles.button, {
        [styles.active]: isActive,
        [styles.isLoading]: isLoading,
      })}
      onClick={() => clickHandler()}
    >
      <LikeIcon />
    </button>
  );
};
