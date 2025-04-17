import React from "react";
import CompanyCards from "./CompanyCards";
import { Button } from "./ui/button";
import { ArrowUpDown, Bolt, Funnel, Languages } from "lucide-react";

const Homepage = () => {
  return (
    <div className="px-20 pt-10">
      <div className="flex items-center gap-3 mb-5 mx-5 justify-between">
        <span className="font-bold text-3xl">Hi Raunak!</span>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <span>Sort </span>
            <ArrowUpDown />
          </Button>
          <Button variant="outline">
            <span>Filter </span>
            <Funnel />
          </Button>
          <Button variant="outline">
            <span>Settings</span>
            <Bolt />
          </Button>
          <Button variant="outline">
            <span>English</span>
            <Languages />
          </Button>
        </div>
      </div>
      <CompanyCards />
    </div>
  );
};

export default Homepage;
