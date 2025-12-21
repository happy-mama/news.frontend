type NewsSourceName = "openNET" | null;

type ROUTE_NewsList = Array<{
  slug: string;
  name: string;
  description: string;
  likes: number;
  dislikes: number;
  source_name: NewsSourceName;
  source_link: string;
  published_at: Date | null;
}>;
