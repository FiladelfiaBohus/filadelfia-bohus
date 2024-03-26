import { ContentArea, PageContent } from "@/components";
import { getClient, HOME_PAGE_QUERY } from "@/api";

export async function generateMetadata() {
  const {
    data: { homePage },
  } = await getClient().query({
    query: HOME_PAGE_QUERY,
  });
  return {
    title: `${homePage.pageTitle}`,
    description: `${homePage.pageDescription}`,
  };
}

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
