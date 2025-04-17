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
    <div className=" w-screen flex justify-center">
      <div className="flex justify-between gap-3 items-center w-fit bg-chart-2/50 backdrop-blur-2xl shadow-xl mt-3 px-3 rounded-2xl">
        <Link href="/">
          <Image
            src="/practo.png"
            width={100}
            height={100}
            className="rounded-full -my-5"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-0">
          <Input
            className="px-3 w-200 rounded-r-none text-background font-semibold placeholder:text-background/50"
            type="text"
            placeholder="search for stocks.."
          />
          <Button className=" cursor-pointer rounded-l-none px-3  w-10">
            <Search/>
          </Button>
        </div>
        <div className="flex ml-5 gap-3">
          <Button asChild>
            <Link href="\">Login</Link>
          </Button>
          {/* <Button asChild>
            <Link href="\">Sign up</Link>
          </Button> */}
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
    </div>
  );
};

export default Navbar;
