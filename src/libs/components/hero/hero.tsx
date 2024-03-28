import Image from "next/image";

// import { getBase64 } from "@/libs/helpers";

import { HeroFragment } from "@/libs/types/generated/graphql";

import s from "./hero.module.css";

interface HeroProps extends HeroFragment {
  priority?: boolean;
}

export const Hero: React.FC<HeroProps> = async ({
  heroImage,
  ingress,
  priority,
  title,
}) => {
  // const blurredImage = await getBase64(heroImage.url);
  let TitleComponent = <h2 className={s["title"]}>{title}</h2>;
  let heroStyles = [s["hero"], s["margin"]].join(" ");

  if (priority) {
    TitleComponent = <h1 className={s["title"]}>{title}</h1>;
    heroStyles = s["hero"];
  }

  return (
    <div className={heroStyles}>
      <span className={s["ingress"]}>{ingress}</span>
      {TitleComponent}
      <div className={s["image-wrapper"]}>
        <Image
          src={heroImage.url}
          alt="hej"
          fill
          style={{ objectFit: "cover", overflow: "hidden" }}
          // blurDataURL={blurredImage}
          // placeholder="blur"
          // priority={priority}
        />
      </div>
    </div>
  );
};
