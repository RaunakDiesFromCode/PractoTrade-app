"use client";

import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  CardContent,
  CardFooter,

} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "./ui/separator";

import { useStockChartData1D } from "@/hooks/useStockChartData1D";

const chartConfig = {
  high: {
    label: "High",
    color: "hsl(140, 70%, 50%)",
  },
  low: {
    label: "Low",
    color: "hsl(10, 70%, 50%)",
  },
};

type StockChartProps = {
  name: string; // e.g. "TCS.NS"
};

export function StockChart1D({ name }: StockChartProps) {
  const { data } = useStockChartData1D(name);

  const getDomain = (): [number, number] => {
    if (data.length === 0) return [0, 100];
    const allValues = data.flatMap((d) => [d.high, d.low]);
    const min = Math.min(...allValues);
    const max = Math.max(...allValues);
    const range = max - min;
    const buffer = range * 0.01;
    return [min - buffer, max + buffer];
  };

  return (
    <>
      <CardContent className="h-fit">
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            height={250}
            width={350}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis domain={getDomain()} tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillHigh" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-high)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-high)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillLow" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-low)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-low)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="high"
              stroke="var(--color-high)"
              fill="url(#fillHigh)"
              fillOpacity={0.4}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="low"
              stroke="var(--color-low)"
              fill="url(#fillLow)"
              fillOpacity={0.4}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <Separator />
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          *Data might not be fully accurate
        </div>
      </CardFooter>
    </>
  );
}
