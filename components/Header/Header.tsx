import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Header = ({
  className,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={className}>Header</div>;
};
