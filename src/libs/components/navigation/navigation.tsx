"use client";

import Image from "next/image";
import Link from "next/link";

import { useWindowScroll, useWindowSize } from "react-use";

import { ImageBasicFragment, NavLinkFragment } from "@/libs/types";

import s from "./navigation.module.css";

interface INavigationProps {
  links: NavLinkFragment[];
  logo: ImageBasicFragment;
  logoText?: string;
}

export const Navigation = ({ links, logo, logoText }: INavigationProps) => {
  const { y: scrollY } = useWindowScroll();
  const { height } = useWindowSize();
  const logoHeight = scrollY <= 60 ? 47 : 27;
  const logoWidth = scrollY <= 60 ? 52 : 32;

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

  function calculateY(scrollY: number, windowHeight: number) {
    const percentage = (scrollY / windowHeight) * 100;
    const targetPercentage = 40;
    const startY = 130;
    const targetY = 56;

    let y = startY - ((startY - targetY) * percentage) / targetPercentage;

    // Ensure y stays within the range of 56 to 130
    y = Math.max(targetY, Math.min(startY, y));

    return {
      y,
      percentage,
    };
  }

  function calculateBlurAmount() {
    const percentage = calculateY(scrollY, height).percentage;
    if (percentage >= 10) {
      return 10;
    } else return percentage;
  }

  function calculateOpacity() {
    const percentage = calculateY(scrollY, height).percentage;
    if (percentage < 40 && percentage * 0.1 < 0.9) {
      return percentage * 0.1;
    }
    return 0.9;
  }

  const navStyles = {
    height: calculateY(scrollY, height).y,
    background: `linear-gradient(to bottom, rgba(0, 0, 0, ${
      calculateOpacity() + 0.5
    }), rgba(0, 0, 0, ${calculateOpacity()})`,
    backdropFilter: `blur(${calculateBlurAmount()}px)`,
  };

  return (
    <nav
      className={`${s["navigation"]}`}
      style={{
        blockSize: navStyles.height,
        background: navStyles.background,
        backdropFilter: navStyles.backdropFilter,
      }}
    >
      <div className={s["nav-inner"]}>
        <Link className={s["logo-link"]} href="/">
          <div
            className={s["logo-wrapper"]}
            style={{ width: logoWidth, height: logoHeight }}
          >
            <Image
              src={logo.url || ""}
              alt="Filadelfia Bohus logotyp"
              style={{ transition: ".3s ease" }}
              fill
            />
          </div>
          <span
            className={`${s["logo-text"]} ${
              scrollY <= 60 && s["logo-big-text"]
            }`}
          >
            {logoText}
          </span>
        </Link>

        <div className={s["nav-right"]}>{links.map(linksMapper)}</div>
      </div>
    </nav>
  );
};
