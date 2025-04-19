"use client";

import React from "react";
import CompanyCards from "./CompanyCards";
import { Button } from "./ui/button";
import { ArrowUpDown, Bolt, Funnel} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Homepage = () => {
  const { user } = useAuth();

  return (
    <div className="px-5 md:px-20 pt-10">
      <div className="flex items-center gap-3 mb-5 mx-5 justify-between">
        <span className="font-bold text-xl sm:text-2xl md:text-3xl">
          Hi {user?.username}!
        </span>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <span className="md:block hidden">Sort </span>
            <ArrowUpDown />
          </Button>
          <Button variant="outline">
            <span className="md:block hidden">Filter </span>
            <Funnel />
          </Button>
          <Button variant="outline">
            <span className="md:block hidden">Settings</span>
            <Bolt />
          </Button>
        </div>
      </div>
      <CompanyCards />
    </div>
  );
};

export default Homepage;
