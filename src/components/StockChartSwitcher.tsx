"use client";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { StockChart1D } from "./StockChart1D";
import { StockChart7D } from "./StockChart7D";
import { StockChartRealtime } from "./StockChartRealtime";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const chartOptions = [
  { value: "1d", label: "Yesterday" },
  { value: "7d", label: "7 Days" },
  { value: "realtime", label: "Realtime" },
];

export default function StockChartSwitcher({ slug }: { slug: string }) {
  const [selectedChart, setSelectedChart] = useState("realtime");
  const [open, setOpen] = useState(false);

  const renderChart = () => {
    switch (selectedChart) {
      case "1d":
        return <StockChart1D name={slug} />;
      case "7d":
        return <StockChart7D name={slug} />;
      case "realtime":
        return <StockChartRealtime name={slug} />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>{slug} Stock Price</div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full sm:w-[200px] justify-between"
              >
                {chartOptions.find((option) => option.value === selectedChart)
                  ?.label || "Select chart"}
                <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandList>
                  <CommandEmpty>No chart found.</CommandEmpty>
                  <CommandGroup>
                    {chartOptions.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={(value) => {
                          setSelectedChart(value);
                          setOpen(false);
                        }}
                      >
                        {option.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            selectedChart === option.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </CardTitle>
      </CardHeader>
      {renderChart()}
    </Card>
  );
}
