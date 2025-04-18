"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "./ui/input";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
<<<<<<< HEAD
    // <div className="w-full flex justify-between items-center bg-background/60 backdrop-blur-md shadow-md px-30  border border-white/10 h-fit">
    <div className="w-full flex justify-between items-center bg-black/70 backdrop-blur-lg  px-30 py-0.5  border border-white/15 h-[70px]">
=======
    <div className="w-full flex justify-between items-center bg-background/60 backdrop-blur-md shadow-md px-30  border border-white/10 h-[70px] ">
>>>>>>> 08809e2757cbcc1101473c24f0836075278d3b1b
      {/* Left Section: Logo, Home, News */}
      <div className="flex items-center gap-5">
        <Image
          src="/practo.png"
          width={100}
          height={100}
          className="rounded-full"
          alt="logo"
        />
        <Link
          href="/home"
          className="text-white/70 text-lg font-semibold hover:scale-101 hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/news"
          className="text-white/70 text-lg font-semibold hover:scale-101 hover:text-white"
        >
          News
        </Link>
      </div>

      {/* Right Section: Search Bar, Login, Night Mode */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-0">
          <Input
            className="px-3 w-60 rounded-r-none font-semibold  bg-transparent"
            type="text"
            placeholder="Search for stocks..."
          />
          <Button className="cursor-pointer rounded-l-none px-3 w-10" variant={"outline"}>
            <Search />
          </Button>
        </div>
        <Button asChild variant="outline">
          <Link href="/">Login</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
          <Moon className="hidden h-5 w-5 dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
