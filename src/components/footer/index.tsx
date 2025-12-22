import FAVICON_ICO from "@/public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-15 bg-dark2 max-w-275 mx-auto rounded-xs mt-4">
      <div className="h-full flex items-center justify-between px-12.5">
        <Link href="/" className="flex items-center justify-center gap-6">
          <Image src={FAVICON_ICO} width={40} height={40} alt="logo" />
          <h3 className="text-lg">
            <span className="text-gray-500 italic">news</span>.happy.tatar
          </h3>
        </Link>
      </div>
    </footer>
  );
}
