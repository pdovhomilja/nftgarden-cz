import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col text-white justify-center items-center w-full h-screen bg-black space-y-5 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-red-500">NFT Garden</h1>
        <p className="text-2xl">A place to grow your NFTs</p>
        <p>We are working on it!</p>
      </div>
      <div>
        <p>We are running on coolify</p>
      </div>
    </main>
  );
}
