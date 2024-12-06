import Image from "next/image";
import BlackHoleImg from "./black-hole.png";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center text-indigo-500  h-screen font-[family-name:var(--font-geist-sans)]">
     <div className="flex flex-col text-center justify-center items-center">

     <h1 className="text-6xl">Hello world!</h1>
     <h2 className="text-2xl mt-4">Welcome to 
      <b>     guifuentes8 server!      </b>
      </h2>
      <Image className="mt-4" width={64} height={64} src={BlackHoleImg} alt="black-hole"/>
     </div>
    </div>
  );
}
