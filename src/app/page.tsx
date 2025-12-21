import { GETlastNews, NEWS_KEYS } from "@/src/api/news";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const RootPage = dynamic(() => import("@/src/pages/root/index"), { ssr: true });

export default async function Root() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: NEWS_KEYS.lastNews,
    queryFn: () => GETlastNews(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RootPage />
    </HydrationBoundary>
  );
}

export const metadata: Metadata = {
  title: "news.happy.tatar",
  description: "top news 1337",
};
