"use client";

import Image from "next/image";
import Link from "next/link";

import { useWindowScroll, useWindowSize } from "react-use";

import {
  ImageBasicFragment,
  NavLinkFragment,
} from "@/libs/types/generated/graphql";

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
    // Calculate the percentage of the scroll position relative to the window height
    const percentage = (scrollY / windowHeight) * 100;

    // Define the target percentage and corresponding y values
    const targetPercentage = 40; // The target percentage where y should be 56
    const startY = 130; // The starting y value
    const targetY = 56; // The target y value

    // Calculate the y value based on the target percentage
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
    if (percentage < 40 && percentage * 0.1 < 0.7) {
      return percentage * 0.1;
    }
    return 0.7;
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
          <div className={s["logo-wrapper"]}>
            <Image
              src={logo.url || ""}
              alt="Filadelfia Bohus logotyp"
              height={logoHeight}
              width={logoWidth}
              style={{ transition: ".3s ease" }}
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
