import Image from "next/image";

import { getBase64 } from "@/libs/helpers";

import { HeroFragment } from "@/libs/types/generated/graphql";

import s from "./hero.module.css";

export const Hero = async ({ image, ingress, title }: HeroFragment) => {
  const blurredImage = await getBase64(image.url);
  return (
    <div className={s["hero"]}>
      <span className={s["ingress"]}>{ingress}</span>
      <h1 className={s["title"]}>{title}</h1>
      <div className={s["image-wrapper"]}>
        <Image
          src={image.url}
          alt="hej"
          fill
          style={{ objectFit: "cover", overflow: "hidden" }}
          blurDataURL={blurredImage}
          placeholder="blur"
        />
      </div>
    </div>
  );
};
