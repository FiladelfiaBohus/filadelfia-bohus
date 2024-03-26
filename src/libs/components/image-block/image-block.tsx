import Image from "next/image";

import { ImageBlockFragment } from "@/libs/types";

import s from "./image-block.module.css";

export const ImageBlock: React.FC<ImageBlockFragment> = ({ image }) => {
  if (!image) {
    return null;
  }
  return (
    <div className={s["image-block"]}>
      <div className={s["image-wrapper"]}>
        <Image src={image.url} alt="Hej" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};
