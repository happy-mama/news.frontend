import type { Metadata } from "next";

import "./globals.css";

import { QueryClientProviderHook } from "../hooks/queryProvider";
import Header from "../components/header";
import Footer from "../components/footer";

import { Fira_Sans } from "next/font/google";

const firaSansMono = Fira_Sans({
  weight: ["400", "600"],
  variable: "--font-fira-sans",
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-dark ${firaSansMono.variable}`}>
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

export const metadata: Metadata = {
  title: "news.happy.tatar",
  description: "top news 1337",
};
