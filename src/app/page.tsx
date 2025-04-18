import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-screen h-[84vh] px-20 pt-5 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-5">Practo Trade</h1>
      <p className="text-2xl mb-10">
        &quot;Decode Sentiment, Trade Confidently&quot;
      </p>

      <Image
        src="/practo_landing_3.png"
        width={500}
        height={500}
        className="rounded-lg shadow-lg mb-5"
        alt="Landing Page Image"
      />

      {/* <div className="relative w-full max-w-[1000px] h-[1000px] mb-5">
  <Image
    src="/landing_page.png"
    alt="Landing Page Image"
    fill
    className="object-cover rounded-lg shadow-lg"
  />
</div> */}

      <Button
        asChild
        className="w-1/9 bg-black hover:bg-grey-600 text-white font-bold py-2 px-4 rounded-xl border-1 border-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        <Link href="/home">
          <span>Get started</span>
        </Link>
      </Button>
    </div>
  );
};

export default page;
