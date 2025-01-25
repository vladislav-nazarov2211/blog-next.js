"use client";

import { useState } from "react";
import { cardType } from "./dataType";
import { PostCard } from "../PostCard/PostCard";
import { Like } from "../Like/Like";
import styles from "./Posts.module.css";

export const Posts = ({ posts }: Array<cardType>) => {
  // state для всех карточек, включает в себя id и счетчик лайков
  const [cards, setCards] = useState<Array<cardType>>(posts);

  return (
    <div className={`container ${styles.wrapper}`}>
      {cards?.map((el: cardType) => {
        return (
          <div className={styles.post} key={el.id}>
            <PostCard likesCount={el.likesCount || 0} />
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <Like setCards={setCards} itemID={el.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
