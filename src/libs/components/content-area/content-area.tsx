import { HomePageFragment, PageFragment } from "@/types";
import { isHero, isImageBlock, isStaffList, isText } from "@/type-guards";

import { Hero, ImageBlock, StaffList, Text } from "..";

interface IContentAreaProps {
  content: HomePageFragment["content"] | PageFragment["content"];
}

export const ContentArea: React.FC<IContentAreaProps> = ({ content }) => {
  const contentMapper = (item: any, index: number) => {
    const key = `${item.id}-${index}`;
    if (isHero(item)) {
      return <Hero key={key} {...item} priority={index === 0} />;
    }
    if (isImageBlock(item)) {
      return <ImageBlock key={key} {...item} />;
    }
    if (isStaffList(item)) {
      return <StaffList key={key} priority={index !== -1} {...item} />;
    }
    if (isText(item)) {
      return <Text key={key} {...item} />;
    }
    return null;
  };

  if (!content.length) {
    return null;
  }

  return <>{content.map(contentMapper)}</>;
};
