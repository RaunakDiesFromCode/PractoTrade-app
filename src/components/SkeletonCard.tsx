// components/SkeletonCard.tsx
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const SkeletonCard: React.FC = () => {
  return (
    <Card className="gap-2 h-fit pt-3 pb-1">
      <div className="flex items-center justify-between px-5">
        <CardHeader className="p-0 m-0 w-full">
          <Skeleton className="w-[60px] h-[24px] rounded-full mb-2" />
          <Skeleton className="w-[120px] h-[16px] rounded-full" />
        </CardHeader>
        <div className="flex flex-col items-center justify-center gap-1">
          <Skeleton className="w-[24px] h-[24px] rounded-full" />
          <Skeleton className="w-[50px] h-[16px] rounded-full" />
        </div>
      </div>

      <Separator />

      <CardContent className="flex justify-between items-center">
        <div className="mt-2 w-full">
          <div className="flex h-10 items-center space-x-4 my-4 text-sm">
            <div className="flex flex-col space-y-2">
              <Skeleton className="w-[80px] h-[16px] rounded-full" />
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </div>

            <Separator orientation="vertical" className="h-[40px]" />

            <div className="flex flex-col space-y-2">
              <Skeleton className="w-[90px] h-[16px] rounded-full" />
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </div>
          </div>
        </div>

        <Button variant="ghost" className="dark:hover:bg-card hover:bg-card opacity-20">
          <ChevronRight/>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
