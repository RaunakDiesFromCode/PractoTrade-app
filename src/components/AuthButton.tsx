"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { getUser, logout } from "@/lib/auth";

const AuthButton = ({ className }: { className?: string }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (user) setIsLoggedIn(true);
  }, []);

  return isLoggedIn ? (
    <Button variant="outline" className={className} onClick={logout}>
      Logout
    </Button>
  ) : (
    <Button asChild variant="outline" className={className}>
      <Link href="/login">Login</Link>
    </Button>
  );
};

export default AuthButton;
