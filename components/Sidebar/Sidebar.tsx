import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({
  className,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={className}>
      Sidebar
      <Menu />
    </div>
  );
};
