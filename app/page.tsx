import Logo from "@/public/logo.svg";
import Image from "next/image";
export const metadata = {
  title: "Coming Soon | Andcodex IT Solutions",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <Image
          src={Logo}
          alt="Andcodex IT Solutions"
          width={100}
          height={100}
          className="mx-auto mb-4 lg:mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-red-500 uppercase mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
}
