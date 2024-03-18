import { HomePageFragment, PageFragment } from "@/lib/types/generated/graphql";
import { isHero } from "@/type-guards";

interface IContentAreaProps {
  content: HomePageFragment["content"] | PageFragment["content"];
}

export const ContentArea: React.FC<IContentAreaProps> = ({ content }) => {
  const contentMapper = (item: any, index: number) => {
    if (isHero(item)) {
    }
    return null;
  };

  if (!content.length) {
    return null;
  }

  return <>{content.map(contentMapper)}</>;
};
