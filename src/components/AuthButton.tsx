"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getUser, logout } from "@/lib/auth";
import { LogIn, LogOut } from "lucide-react";

const AuthButton = ({ className }: { className?: string }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (user) setIsLoggedIn(true);

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMdUp(e.matches);

    // Initial check
    setIsMdUp(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const buttonSize = isMdUp ? "default" : "icon";

  return isLoggedIn ? (
    <Button
      variant="outline"
      className={`flex items-center ${className}`}
      onClick={logout}
      size={buttonSize}
    >
      <span className="hidden md:inline">Logout</span>
      <LogOut />
    </Button>
  ) : (
    <Button
      asChild
      variant="outline"
      className={`flex items-center ${className}`}
      size={buttonSize}
    >
      <Link href="/login">
        <span className="hidden md:inline">Login</span>
        <LogIn />
      </Link>
    </Button>
  );
};

export default AuthButton;
