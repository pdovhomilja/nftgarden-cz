import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen bg-black ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-red-500">NFT Garden</h1>
        <p className="text-white">A place to grow your NFTs</p>
      </div>
    </main>
  );
}
