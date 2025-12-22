"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { GETlastNews, NEWS_KEYS } from "@/src/api/news";
import { dateToddmmyyyy, dateTohhmm } from "@/src/utils/calc";

export default function RootPage() {
  const { data: lastNews } = useQuery({
    queryKey: NEWS_KEYS.lastNews,
    queryFn: () => GETlastNews(),
  });

  if (!lastNews) return <>Загрузка...</>;

  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 bg-dark2 rounded-xs p-2.5 max-w-275 mx-auto">
        {lastNews.map((news, i) => {
          const date = new Date(news.published_at);

          let dateFormated: string;

          if (date.getDay() == new Date().getDay()) {
            dateFormated = dateTohhmm(date);
          } else {
            dateFormated = dateToddmmyyyy(date);
          }

          return (
            <Link
              href={`/news/${news.slug}`}
              key={i}
              className="flex flex-col justify-between gap-1 p-2 bg-dark3 rounded-xs group"
            >
              <h1 className="text-[18px] transition-all group-hover:underline group-hover:text-link-active">
                {news.name}
              </h1>
              <h2 className="text-[14px]">{news.description}</h2>

              <div className="w-full flex items-center justify-between">
                <span>{dateFormated}</span>
                <span>
                  источник:{" "}
                  <span className="text-[#babfa2]">{news.source_name}</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
