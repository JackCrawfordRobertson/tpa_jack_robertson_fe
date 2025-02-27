"use client";

import React, { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // ShadCN Button Component
import { cn } from "@/lib/utils"; // ShadCN Utility for class merging

// ShadCN Styled Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div
        className={cn(
          "min-w-[12rem] p-3 rounded-lg border bg-background text-xs shadow-md",
          "border-border/50 text-foreground"
        )}
      >
        <div className="mb-1 text-sm font-medium">Cluster Group {data.cluster}</div>
        <div className="grid gap-1.5">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transaction Amount:</span>
            <span className="font-mono font-semibold">£{data.x.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Customer Segment:</span>
            <span className="font-semibold">{data.y}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transaction Count:</span>
            <span className="font-mono font-semibold">{data.size}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function KMedoidsScatterPlot() {
  const [clusterData, setClusterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [zoomLevel, setZoomLevel] = useState("all");

  useEffect(() => {
    fetch("/recharts_data.json")
      .then((res) => res.json())
      .then((data) => {
        setClusterData(data);
        setFilteredData(data); // Default to all data
      });
  }, []);

  // Assign a unique colour per cluster
  const clusterColours = {
    0: "hsl(var(--chart-2))",
    1: "hsl(var(--chart-3))",
    2: "hsl(var(--chart-5))",
    3: "hsl(var(--chart-4))",
    4: "hsl(var(--chart-1))",
  };

  // Filter Data for "Zoom" Effect
  const filterData = (range) => {
    setZoomLevel(range);
    if (range === "all") {
      setFilteredData(clusterData);
    } else if (range === "low") {
      setFilteredData(clusterData.filter((d) => d.x < 100));
    } else if (range === "mid") {
      setFilteredData(clusterData.filter((d) => d.x >= 100 && d.x <= 500));
    } else if (range === "high") {
      setFilteredData(clusterData.filter((d) => d.x > 500));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Segmentation (K-Medoids)</CardTitle>
        <CardDescription>
          Clustered customer segments based on transaction behaviour.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Centered Zoom Controls */}
        <div className="flex justify-center gap-2 mb-4">
          <Button variant={zoomLevel === "all" ? "default" : "outline"} onClick={() => filterData("all")}>
            All
          </Button>
          <Button variant={zoomLevel === "low" ? "default" : "outline"} onClick={() => filterData("low")}>
            Low (£-320 - £100)
          </Button>
          <Button variant={zoomLevel === "mid" ? "default" : "outline"} onClick={() => filterData("mid")}>
            Mid (£100 - £500)
          </Button>
          <Button variant={zoomLevel === "high" ? "default" : "outline"} onClick={() => filterData("high")}>
            High (£500+)
          </Button>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 10, right: 30, left: 15, bottom: 5 }}>
            <XAxis
              dataKey="x"
              name="Transaction Amount"
              type="number"
              label={{
                value: "Transaction Amount (GBP)",
                position: "insideBottomRight",
                offset: -20,
              }}
            />
            <YAxis
              dataKey="y"
              name="Age Group"
              type="category"
              allowDuplicatedCategory={false}
              label={{
                value: "Age Group",
                angle: -90,
                position: "insideLeft",
                offset: -5,
              }}
            />
            {/* Make bubbles bigger dynamically */}
            <ZAxis dataKey="size" range={[300, 300]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend  />

            {Object.entries(clusterColours).map(([cluster, colour]) => (
              <Scatter
                key={cluster}
                name={`Cluster ${cluster}`}
                data={filteredData.filter((d) => d.cluster === Number(cluster))}
                fill={colour}
                stroke="#fff"
                strokeWidth={1.5}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}