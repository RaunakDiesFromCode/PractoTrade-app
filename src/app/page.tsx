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
        src="/landing.jpg"
        width={400}
        height={400}
        className="rounded-lg shadow-lg mb-5"
        alt="Landing Page Image"
      />
      <Button
        asChild
        className="w-1/9 bg-chart-2 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-xl"
      >
        <Link href="/home">
          <span>Home</span>
        </Link>
      </Button>
    </div>
  );
};

export default page;
