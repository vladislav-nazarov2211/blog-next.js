import Image from "next/image";
import styles from "./PostCard.module.css";
import { Ptag } from "../Ptag/Ptag";
import PointSVG from "./point.svg";
import ArrowSVG from "./arrow.svg";
import { Likes } from "../Likes/Likes";
import { PostCardProps } from "./PostCard.props";

export const PostCard = ({ likesCount }: PostCardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          className={styles.photo}
          src="/post-card.png"
          alt="Picture of the author"
          fill
        />
      </div>

      <div className={styles.description}>
        <div className={styles.description__header}>
          <div className={styles.date}>
            <span>Front-end</span>
            <PointSVG />
            <span>1 месяц назад</span>
          </div>
          <Likes count={likesCount} />
        </div>

        <h3 className={styles.description__title}>Как работать с CSS Grid</h3>

        <Ptag size="s" className={styles.description__info}>
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
        </Ptag>
      </div>

      <div className={styles.footer}>
        <span>3 минуты</span>
        <button>
          Читать
          <ArrowSVG />
        </button>
      </div>
    </div>
  );
};
