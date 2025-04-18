import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { User } from "@/lib/auth"; // import User type

export type PollOption = {
  id: number;
  text: string;
  votes: number;
  percentage: number;
};

type PollData = {
  company: string;
  question: string;
  poll_id: number;
  total_votes: number;
  options: PollOption[];
};

export function useCompanyPoll(symbol: string, user: User | null) {
  const [pollData, setPollData] = useState<PollData | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const today = new Date().toISOString().slice(0, 10);
  const voteKey = `poll-vote-${symbol}-${user?.trader_id || "anon"}-${today}`;
  const sessionKey = "poll-session-id";

  const getSessionId = () => {
    let sessionId = localStorage.getItem(sessionKey);
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem(sessionKey, sessionId || "");
    }
    return sessionId;
  };

  const fetchPoll = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://implicit-electra-sagnify-8514ada8.koyeb.app/api/company-poll/${symbol}/`
      );
      setPollData(res.data);
      setHasVoted(Boolean(localStorage.getItem(voteKey)));
    } catch (err) {
      console.error("Failed to fetch poll", err);
    }
  }, [symbol, voteKey]);

  useEffect(() => {
    fetchPoll();
    const interval = setInterval(fetchPoll, 10000);
    return () => clearInterval(interval);
  }, [symbol, fetchPoll]);

  const submitVote = async () => {
    if (!selectedOption || hasVoted || !pollData) return;

    const session_id = getSessionId();

    try {
      await axios.post(
        `https://implicit-electra-sagnify-8514ada8.koyeb.app/api/company-poll/${symbol}/`,
        {
          session_id,
          option_id: selectedOption,
          trader_id: user?.trader_id ?? null, // pass user ID
        }
      );

      localStorage.setItem(voteKey, "true");
      setHasVoted(true);
      fetchPoll();
    } catch (err) {
      console.error("Vote submission failed", err);
    }
  };

  return {
    pollData,
    selectedOption,
    setSelectedOption,
    hasVoted,
    submitVote,
  };
}
