import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center h-[50vh] bg-gray-900 relative">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white">Learning Web Development</h1>
          <span className="text-white">An easy guide to start developing on the Web</span>
          <small className="text-gray-500">Made for FIF or CD members</small>
        </div>

        <div className="flex gap-12 w-full px-48 absolute -bottom-16">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            width={200}
            height={200}
            alt="Image"
            className="h-24 drop-shadow-2xl w-fit"
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/256/174/174854.png"
            width={200}
            height={200}
            alt="Image"
            className="h-24 object-contain drop-shadow-2xl w-fit"
          />
          <Image
            src="https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png"
            width={200}
            height={200}
            alt="Image"
            className="h-24 object-contain drop-shadow-2xl w-fit"
          />
          <Image
            src="https://i.pinimg.com/originals/13/40/7c/13407c12f50f08d328800c3caef43f61.png"
            width={200}
            height={200}
            alt="Image"
            className="h-24 object-contain drop-shadow-2xl w-fit"
          />
          <Image
            src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
            width={200}
            height={200}
            alt="Image"
            className="h-24 object-contain drop-shadow-2xl w-fit"
          />
        </div>
      </div>
    </main>
  );
}
