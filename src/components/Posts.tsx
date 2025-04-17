import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const Posts = ({ name }: { name: string }) => {
  return (
    <Card className="w-full mt-5">
      <CardHeader className="p-0 m-0 w-full">
        <CardTitle className="text-2xl px-10">Top News of {name}</CardTitle>
      </CardHeader>
      <Separator/>
      <CardContent>

      </CardContent>
    </Card>
  );
};

export default Posts;
