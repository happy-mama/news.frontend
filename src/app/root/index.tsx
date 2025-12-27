"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { GETlastNews, NEWS_KEYS } from "@/src/api/news";
import { dateToddmm } from "@/src/utils/calc";

import CALENDAR_SVG from "@/src/assets/svg/calendar.svg";
import Image from "next/image";
import axios from "axios";

export default function RootPage() {
  const { data: lastNews } = useQuery({
    queryKey: NEWS_KEYS.lastNews,
    queryFn: () => GETlastNews(),
  });

  const { data: markdown } = useQuery({
    queryKey: ["TEMP_markdown"],
    queryFn: () => axios.get("/test2.md"),
  });

  if (!lastNews) return <>Загрузка...</>;

  console.log(markdown?.data);

  return (
    <main className="min-h-screen max-w-5xl mx-auto">
      <div className="flex flex-row gap-3 p-2.5">
        <div className="flex flex-col gap-2.5 bg-dark rounded-2xl">
          {lastNews.map((news, i) => {
            const date = new Date(news.published_at);

            const dateFormated = dateToddmm(date);

            return (
              <div
                key={i}
                className="flex flex-col justify-between gap-3 p-4 bg-dark2 rounded-xl group"
              >
                <Image
                  src="/sex.jpg"
                  width={600}
                  height={200}
                  alt="news-image"
                  className="rounded-xl min-w-full object-cover max-h-65 select-none"
                  draggable={false}
                />

                <Link href={`/news/${news.slug}`}>
                  <h1 className="text-[26px] font-semibold leading-7 transition-all group-hover:text-link hover:text-link-active hover:underline">
                    {news.name}
                  </h1>
                </Link>

                <h2 className="text-[18px] leading-6">{news.description}</h2>

                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-[12px]">
                    <CALENDAR_SVG width={16} height={16} />

                    <span>{dateFormated}</span>
                    <span className="text-[#babfa2] font-semibold">
                      {news.source_name}
                    </span>
                  </div>
                  <div>
                    {/* <span>0</span> */}
                    {/* <span>0</span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative">
          <div className="min-w-75 h-0" />
          <div className="sticky top-12.5 right-0 w-75 h-100 rounded-xl bg-dark2 p-4">
            <span className="text-[16px] text-gray2">Читают сейчас</span>
          </div>
        </div>
      </div>
    </main>
  );
}
