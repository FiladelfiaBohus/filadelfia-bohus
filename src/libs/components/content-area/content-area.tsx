import { HomePageFragment, PageFragment } from "@/libs/types/generated/graphql";
import { isHero, isPersonInfo } from "@/type-guards";

import { Hero, PersonInfo } from "..";

interface IContentAreaProps {
  content: HomePageFragment["content"] | PageFragment["content"];
}

export const ContentArea: React.FC<IContentAreaProps> = ({ content }) => {
  const contentMapper = (item: any, index: number) => {
    const key = `${item.id}-${index}`;
    if (isHero(item)) {
      return <Hero key={key} {...item} />;
    }
    if (isPersonInfo(item)) {
      return <PersonInfo key={key} {...item} />;
    }
    return null;
  };

  if (!content.length) {
    return null;
  }

  return <>{content.map(contentMapper)}</>;
};
