"use client";

import Link from "next/link";
import React, {useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Input } from "./ui/input";
import AuthButton from "./AuthButton";
// import { cn } from "@/lib/utils"; // Assuming you have a utility to merge classnames

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showMobileSearch, setShowMobileSearch] = useState(false);


  return (
    <>
      <div className="w-full flex justify-between items-center bg-background/50 backdrop-blur-lg px-4 sm:px-8 py-0.5 border border-white/15 h-[70px]">
        {/* Left Section */}
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

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center gap-0">
            <Input
              className="px-3 w-60 rounded-r-none font-semibold bg-transparent"
              type="text"
              placeholder="Search for stocks..."
            />
            <Button
              className="cursor-pointer rounded-l-none px-3 w-10"
              variant="outline"
            >
              <Search />
            </Button>
          </div>

          {/* Mobile Search Icon */}
          <Button
            className="md:hidden px-2" // changed from sm:hidden to md:hidden
            variant="outline"
            size="icon"
            onClick={() => setShowMobileSearch((prev) => !prev)}
          >
            {showMobileSearch ? <X /> : <Search />}
          </Button>

          {/* Auth */}
          <AuthButton />

          {/* Theme Toggle */}
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

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="sm:hidden flex px-4 py-2 bg-background/70 backdrop-blur border-t border-white/10">
          <Input
            className="w-full px-3 py-2 font-semibold bg-transparent rounded-r-none"
            type="text"
            placeholder="Search for stocks..."
          />
          <Button
            className="cursor-pointer rounded-l-none px-3 w-10"
            variant="outline"
          >
            <Search />
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
