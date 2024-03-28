"use client";

import Image from "next/image";
import Link from "next/link";
import { useWindowSize, useWindowScroll } from "react-use";

import { ImageBasicFragment, NavLinkFragment } from "@/libs/types";

import { getBlockSize, getOpacity, getScrollPercentage } from "@/libs/helpers";

import s from "./navigation.module.css";

interface INavigationProps {
  links: NavLinkFragment[];
  logo: ImageBasicFragment;
  logoText?: string;
}

export const Navigation = ({ links, logo, logoText }: INavigationProps) => {
  const { y } = useWindowScroll();
  const { height: windowHeight } = useWindowSize();

  function linksMapper(item: NavLinkFragment, index: number) {
    if (!item || !item?.page) {
      return null;
    }
    const key = `${item.id}-${index}`;
    return (
      <Link className={s["nav-link"]} href={item?.page?.slug ?? ""} key={key}>
        {item.page?.pageTitle}
      </Link>
    );
  }

  console.log(getScrollPercentage(windowHeight, y));

  const navStyles = {
    blockSize: `${getBlockSize(y)}px`,
    background: `linear-gradient(to bottom, rgba(27, 27, 31, ${
      0.85 + getOpacity(y)
    }), rgba(27, 27, 31, ${getScrollPercentage(windowHeight, y)}))`,
    backdropFilter: `blur(${getScrollPercentage(windowHeight, y) * 10}px)`,
  };

  return (
    <nav className={s["navigation"]} style={navStyles} role="navigation">
      <div className={s["nav-inner"]}>
        <Link className={s["logo-link"]} href="/">
          <div className={s["logo-wrapper"]}>
            <Image
              src={logo.url || ""}
              alt="Filadelfia Bohus logotyp"
              style={{ transition: ".3s ease" }}
              fill
            />
          </div>
          <span className={`${s["logo-text"]}`}>{logoText}</span>
        </Link>

        <div className={s["nav-right"]}>{links.map(linksMapper)}</div>
      </div>
    </nav>
  );
};
