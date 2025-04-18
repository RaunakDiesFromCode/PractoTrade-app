import { useEffect, useState } from "react";

export type StockDataPoint = {
  time: string;
  high: number;
  low: number;
};

export function useStockChartData1D(name: string) {
  const [data, setData] = useState<StockDataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://implicit-electra-sagnify-8514ada8.koyeb.app/api/stock-chart/?company=${name}&interval=1d`
        );
        const json = await res.json();
        const chart = json.chart_data.data[0];

        const formattedData = chart.x.map((timestamp: string, i: number) => {
          const date = new Date(timestamp);
          const formattedTime = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });

          return {
            time: formattedTime,
            high: Number(chart.high[i]?.toFixed(2)) || 0,
            low: Number(chart.low[i]?.toFixed(2)) || 0,
          };
        });

        setData(formattedData);
      } catch (err) {
        console.error("Failed to fetch stock chart data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { data, loading };
}
