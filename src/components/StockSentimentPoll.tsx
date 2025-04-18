"use client";

import { useState } from "react";
import { CheckIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCompanyPoll } from "@/hooks/useCompanyPoll";

type Props = {
  symbol: string;
};

export default function StockSentimentPoll({ symbol }: Props) {
  const { pollData, selectedOption, setSelectedOption, hasVoted, submitVote } =
    useCompanyPoll(symbol);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await submitVote();
    setIsSubmitting(false);
  };

  if (!pollData) {
    return (
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-lg">Loading poll...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-lg">
          {pollData.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {pollData.options.map((option) => (
          <div
            key={option.id}
            onClick={() => {
              if (!hasVoted) setSelectedOption(option.id);
            }}
            className={cn(
              "flex items-center justify-between px-4 py-3 rounded-md transition-colors",
              selectedOption === option.id
                ? "bg-zinc-700"
                : "bg-zinc-800 hover:bg-zinc-700"
            )}
          >
            <div className="flex items-center gap-2">
              <span>{option.text}</span>
              <span className="text-zinc-400 text-sm">{option.votes}</span>
            </div>
            <div className="flex items-center gap-2">
              {hasVoted && (
                <span className="text-zinc-300">{option.percentage}%</span>
              )}
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
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
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
