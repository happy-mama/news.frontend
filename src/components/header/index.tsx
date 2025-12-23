import FAVICON_ICO from "@/public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="fixed w-screen h-10 bg-dark2 rounded-xs mb-4">
        <div className="h-full flex items-center justify-between px-12.5 mx-auto max-w-275">
          <Link href="/" className="flex items-center justify-center gap-6">
            <Image src={FAVICON_ICO} width={24} height={24} alt="logo" />
            <h3 className="text-lg">
              <span className="text-gray-500 italic">news</span>.happy.tatar
            </h3>
          </Link>
        </div>
      </div>
      <div className="min-h-10 w-screen" />
    </header>
  );
}
