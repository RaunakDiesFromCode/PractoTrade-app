import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="w-full flex justify-center  items-center bg-black/70 mt-5 py-1 border border-white/10 h-[70px]">
        <p className="text-gray-300">
          Copyright &copy;2025 Practo Trade . All rights reserved | {" "}
          <Link href='\policy'><span className="font-bold">Privacy Policy</span>
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
