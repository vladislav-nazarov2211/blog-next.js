import { LikesProps } from "./Likes.props";
import LikesSVG from "./likes.svg";

export const Likes = ({ count }: LikesProps): JSX.Element => {
  return (
    <div>
      <span style={{ marginRight: "5px" }}>{count}</span>
      <LikesSVG />
    </div>
  );
};
