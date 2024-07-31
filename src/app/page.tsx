import { landingTechnologiesLogos } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-20">
      <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-900 w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white">Learning Web Development</h1>
          <span className="text-white">An easy guide to start developing on the Web</span>
          <small className="text-gray-500">Made for FIF or CD members</small>
        </div>

      </div>
      <div className="flex flex-wrap gap-12 w-5/6">
        {
          landingTechnologiesLogos.map(img => (
            <div key={img.src} className="w-[200px] flex flex-col gap-4">
              <Image {...img} alt={img.alt} className="h-[120px]" />

              <span className="text-xl font-bold text-center">{img.name}</span>
            </div>
          ))
        }
      </div>
    </main>
  );
}
