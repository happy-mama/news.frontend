import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import { GETNewsBySlug, NEWS_KEYS } from "@/src/api/news";

const Page = dynamic(() => import("@/src/app/news/[slug]/page"), {
  ssr: true,
});

export default async function Root(serverProps: ServerProps) {
  const params = await serverProps.params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: NEWS_KEYS.newsBySlug,
    queryFn: () => GETNewsBySlug(params.slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Page slug={params.slug} />
    </HydrationBoundary>
  );
}

export const metadata: Metadata = {
  title: "news.happy.tatar",
  description: "top news 1337",
};
