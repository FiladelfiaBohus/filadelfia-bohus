import { ContentArea, PageContent } from "@/components";
import { getClient, PAGE_QUERY } from "@/api";

import { notFound } from "next/navigation";

interface IPageProps {
  params: {
    slugs: string;
  };
}

export async function generateMetadata({ params }: IPageProps) {
  const {
    data: { page },
  } = await getClient().query({
    query: PAGE_QUERY,
    variables: { slug: params.slugs[0] },
  });
  return {
    title: `${page.pageTitle}`,
    description: `${page.pageDescription || ""}`,
  };
}

export default async function CatchAllPage({ params }: IPageProps) {
  const {
    data: { page },
  } = await getClient().query({
    query: PAGE_QUERY,
    variables: { slug: params.slugs[0] },
  });

  if (!page?.content) {
    return notFound();
  }
  return (
    <PageContent>
      <ContentArea content={page.content} />
    </PageContent>
  );
}
