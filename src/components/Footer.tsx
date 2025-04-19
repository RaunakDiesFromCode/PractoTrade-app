import React from "react";
import Link from "next/link";
import AuthButton from "./AuthButton";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <footer className="w-full flex flex-col sm:flex-row justify-center items-center  mt-5 pt-1 border border-white/10 h-auto sm:h-[60px]">
        <p className="text-foreground/50 text-center sm:text-left">
          &copy;{new Date().getFullYear()} Practo Trade.
        </p>
        <p className="text-foreground/50  text-center sm:ml-2">
          All rights reserved |{" "}
          <Link href="/policy">
            <span className="font-bold">Privacy Policy</span>
          </Link>
        </p>
      </footer>
      <AuthButton className="mb-5 border-none hover:bg-background cursor-pointer hover:scale-105 transition duration-50 ease-in-out shadow-none"/>
    </div>
  );
};

export default Footer;
