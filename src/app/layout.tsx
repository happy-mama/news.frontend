import type { Metadata } from "next";

import "./globals.css";

import { QueryClientProviderHook } from "../hooks/queryProvider";
import Header from "../components/header";
import Footer from "../components/footer";

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
        <body className="min-w-screen min-h-screen">
          <Header />
          {children}
          <Footer />
        </body>
      </QueryClientProviderHook>
    </html>
  );
}
