import Link, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";

type NavLink = {
  name?: string;
} & LinkProps &
  HTMLProps<HTMLAnchorElement>;

const NavLink: FC<NavLink> = ({ href, name }) => {
  return <Link href={href}>{name}</Link>;
};

export default NavLink;
