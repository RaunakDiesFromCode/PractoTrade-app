import React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Separator />
      <footer className="w-full flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-3 px-4 py-2">
        <p className="text-foreground/50 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Practo Trade.
        </p>
        <p className="text-foreground/50 text-center sm:ml-2">
          All rights reserved |{" "}
          <Link href="/policy">
            <span className="font-semibold hover:underline">
              Privacy Policy
            </span>
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
