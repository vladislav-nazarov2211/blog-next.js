import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cardType } from "../Posts/dataType";

export interface LikeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  itemID: number;
  setCards: (cards: Array<cardType>) => void;
}
