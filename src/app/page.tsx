import { landingTechnologiesLogos } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen gap-20">
        <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-900 w-full relative">
          <header className="flex h-20 w-full absolute top-0 px-40 items-center justify-between">
            <div className="flex gap-8 items-center">
              <Link href="/" className="text-white">Home</Link>
              <Link href="/" className="text-white">Home</Link>
              <Link href="/" className="text-white">Home</Link>
              <Link href="/" className="text-white">Home</Link>
              <Link href="/" className="text-white">Home</Link>
              <Link href="/" className="text-white">Home</Link>
            </div>

            <Link href="/" className="text-white">Login</Link>
          </header>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-white">Learning Web Development</h1>
            <span className="text-white">An easy guide to start developing on the Web</span>
            <small className="text-gray-500">Made for CD members</small>
          </div>

        </div>
        <div className="flex flex-wrap gap-12 w-5/6">
          {
            landingTechnologiesLogos.map(img => (
              <div key={img.src} className="w-[200px] flex flex-col gap-8 items-center">
                <Image {...img} alt={img.alt} className="h-[120px]" />
                <span className="text-xl w-fit font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-transparent bg-clip-text">{img.name}</span>
              </div>
            ))
          }
        </div>
      </main>
    </>
  );
}
