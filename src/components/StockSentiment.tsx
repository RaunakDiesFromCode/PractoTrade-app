
import StockSentimentPoll from "./StockSentimentPoll";

export default function StockSentiment({ slug }: { slug: string }) {
  return <StockSentimentPoll symbol={slug} />;
}
