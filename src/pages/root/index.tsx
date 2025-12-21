"use client";

import { GETlastNews, NEWS_KEYS } from "@/src/api/news";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function RootPage() {
  const { data: lastNews } = useQuery({
    queryKey: NEWS_KEYS.lastNews,
    queryFn: () => GETlastNews(),
  });

  if (!lastNews) return <>Загрузка...</>;

  return (
    <main className="grid grid-cols-3 gap-2.5 bg-dark2 rounded-xs p-2.5">
      {lastNews.map((news, i) => (
        <Link
          href={`/news/${news.slug}`}
          key={i}
          className="flex flex-col justify-between gap-1 bg-dark3 rounded-xs group"
        >
          <h2 className="p-2 text-[18px] transition-all group-hover:underline group-hover:text-link-active">
            {news.name}
          </h2>
          <h2 className="p-1 text-[14px]">{news.description}</h2>
        </Link>
      ))}
    </main>
  );
}
