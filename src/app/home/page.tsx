"use client";

import Homepage from "@/components/Homepage";
import React, { useEffect, useState } from "react";
import { getUser } from "@/lib/auth";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures we're running on the client

    const user = getUser();
    if (!user) {
      // Redirect to login page if not authenticated
      window.location.href = "/login";
    }
  }, []);

  if (!isClient || !getUser()) {
    // Optionally show a loading state or nothing while checking auth
    return null;
  }

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default Page;
