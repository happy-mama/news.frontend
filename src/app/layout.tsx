import type { Metadata } from "next";
import "./globals.css";
import { QueryClientProviderHook } from "../hooks/queryProvider";

export const metadata: Metadata = {
  title: "news.happy.tatar",
  description: "top news 1337",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark">
      <QueryClientProviderHook>
        <body className="max-w-275 m-auto">{children}</body>
      </QueryClientProviderHook>
    </html>
  );
}
