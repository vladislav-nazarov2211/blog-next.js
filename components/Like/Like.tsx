"use client";

import styles from "./Like.module.css";
import { useState } from "react";
import LikeIcon from "./LikeIcon.svg";
import classNames from "classnames";
import { LikeProps } from "./Like.props";

export const Like = ({ setLikesCount }: LikeProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clickHandler = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify("test"),
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setIsActive(!isActive);
          //@ts-expect-error error
          setLikesCount((prev: number) => (isActive ? prev - 1 : prev + 1));
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
