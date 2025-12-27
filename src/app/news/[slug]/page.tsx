"use client";

import { GETNewsBySlug, NEWS_KEYS } from "@/src/api/news";
import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface props {
  slug: string;
}

export default function NewsSlugPage({ slug }: props) {
  const { data: newsData } = useQuery({
    queryKey: NEWS_KEYS.newsBySlug,
    queryFn: () => GETNewsBySlug(slug),
  });

  if (!newsData) return <>ЗАГРУЗКА НАХОООЙ!!! ^_^</>;

  return (
    <main className="min-h-screen max-w-5xl mt-5 mx-auto">
      <div>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: CodeBlock,
          }}
        >
          {newsData.md}
        </Markdown>
      </div>
    </main>
  );
}

const CodeBlock = ({ inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={oneDark}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
