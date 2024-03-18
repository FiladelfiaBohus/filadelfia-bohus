"use-client";

import Link from "next/link";

import { NavLinkFragment } from "@/lib/types/generated/graphql";
import s from "./navigation.module.css";

interface INavigationProps {
  links: NavLinkFragment[];
}

export const Navigation = ({ links }: INavigationProps) => {
  function linksMapper(item: NavLinkFragment, index: number) {
    if (!item || !item?.page) {
      return null;
    }
    return (
      <Link href={item.page.slug ?? ""} key={item?.id}>
        {item.page?.slug}
      </Link>
    );
  }

  if (!links) {
    return null;
  }
  return <nav className={s["navigation"]}>{links.map(linksMapper)}</nav>;
};
