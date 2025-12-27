import axiosIsntance from "./axios";

export const NEWS_KEYS = {
  lastNews: ["lastNews"],
  newsBySlug: ["newsBySlug"],
};

export async function GETlastNews() {
  try {
    const res = await axiosIsntance.get("news/", {});

    return (res.data.data as ROUTE_NewsList) || null;
  } catch (e) {
    console.error(e);

    return null;
  }
}

export async function GETNewsBySlug(slug: string) {
  try {
    const res = await axiosIsntance.get(`news/load/${slug}`, {});

    return (res.data.data as ROUTE_NewsFull) || null;
  } catch (e) {
    console.error(e);

    return null;
  }
}
