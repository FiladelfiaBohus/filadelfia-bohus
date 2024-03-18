import { ContentArea, PageContent } from "@/components";
import { getClient, HOME_PAGE_QUERY } from "@/api";

export default async function LandingPage() {
  const {
    data: { homePage },
  } = await getClient().query({ query: HOME_PAGE_QUERY });
  if (!homePage?.content) {
    return null;
  }
  return (
    <PageContent>
      <ContentArea content={homePage?.content} />
    </PageContent>
  );
}
