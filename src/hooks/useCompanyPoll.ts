import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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

export function useCompanyPoll(symbol: string) {
  const [pollData, setPollData] = useState<PollData | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const today = new Date().toISOString().slice(0, 10);
  const voteKey = `poll-vote-${symbol}-${today}`;
  const sessionKey = "poll-session-id";

  const getSessionId = () => {
    let sessionId = localStorage.getItem(sessionKey);
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem(sessionKey, sessionId || "");
    }
    return sessionId;
  };

  // Function to fetch poll data
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

  // Fetch once on load + set interval
  useEffect(() => {
    fetchPoll(); // initial load
    const interval = setInterval(() => {
      fetchPoll(); // refresh every 10 seconds
    }, 10000);

    return () => clearInterval(interval); // cleanup
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
        }
      );

      localStorage.setItem(voteKey, "true");
      setHasVoted(true);
      fetchPoll(); // immediately refresh after voting
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
