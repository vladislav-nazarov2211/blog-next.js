import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  likesCount: number;
}
