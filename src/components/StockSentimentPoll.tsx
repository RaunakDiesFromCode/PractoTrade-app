"use client";

import { useEffect, useState } from "react";
import { CheckIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useCompanyPoll } from "@/hooks/useCompanyPoll";
import { Skeleton } from "./ui/skeleton";

type Props = {
  symbol: string;
};

export default function StockSentimentPoll({ symbol }: Props) {
  const { user } = useAuth(); // ✅ Get user
  const { pollData, selectedOption, setSelectedOption, hasVoted, submitVote } =
    useCompanyPoll(symbol, user); // ✅ Pass user to hook

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          pollData ? (prev + 1) % pollData.options.length : 0
        );
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [pollData]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await submitVote();
    setIsSubmitting(false);
  };

  if (!pollData) {
    return (
      <Card className="w-full mx-auto">
        <CardHeader className="text-center">
          <Skeleton className="w-[200px] h-[24px] mx-auto rounded-md mb-2" />
          <Skeleton className="w-[250px] h-[16px] mx-auto rounded-full" />
        </CardHeader>
        <CardContent className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-[42px] rounded-md bg-muted/40"
            />
          ))}
        </CardContent>
        <CardFooter>
          <Skeleton className="w-full h-[38px] rounded-md" />
        </CardFooter>
      </Card>
    );
  }


  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className=" text-lg">{pollData.question}</CardTitle>
        <CardDescription
          className={cn(
            "transition-opacity duration-500 ease-in-out",
            fade ? "opacity-100" : "opacity-0"
          )}
        >
          {pollData.options[currentIndex]?.percentage}% people think{" "}
          {pollData.options[currentIndex]?.text.toLowerCase()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {pollData.options.map((option) => (
          <div
            key={option.id}
            onClick={() => {
              if (!hasVoted) setSelectedOption(option.id);
            }}
            className={cn(
              "flex items-center justify-between px-4 py-3 rounded-md ",
              selectedOption === option.id
                ? "bg-green-500/50"
                : "bg-foreground/5 hover:bg-foreground/10 transition-colors duration-150"
            )}
          >
            <div className="flex items-center gap-2">
              <span>{option.text}</span>
              <span className=" text-sm">{option.votes}</span>
            </div>
            <div className="flex items-center gap-2">
              {hasVoted && <span className="">{option.percentage}%</span>}
              {selectedOption === option.id && (
                <CheckIcon className="h-4 w-4 text-green-500" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {!hasVoted ? (
          <Button
            onClick={handleSubmit}
            disabled={!selectedOption || isSubmitting}
            className="w-full cursor-pointer"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {isSubmitting ? "Submitting..." : "Submit Vote"}
          </Button>
        ) : (
          <p className="text-center w-full text-zinc-400">
            Thank you for your feedback!
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
