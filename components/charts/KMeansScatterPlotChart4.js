"use client";

import React from "react";
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
import { ChartContainer } from "@/components/ui/chart"; // Keep if you still want the ChartContainer styling

// K-Means Clustered Data
const clusterData = [
    {
        "x": -100.0,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 0.0,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 0.0,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 0.0,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 0.0,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 0.0,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": -98.34,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    // {
    //     "x": -999.99,
    //     "y": "26-35",
    //     "size": 35,
    //     "cluster": 1
    // },
    // {
    //     "x": -999.99,
    //     "y": "26-35",
    //     "size": 35,
    //     "cluster": 1
    // },
    // {
    //     "x": -999.99,
    //     "y": "26-35",
    //     "size": 35,
    //     "cluster": 1
    // },
    // {
    //     "x": -999.99,
    //     "y": "26-35",
    //     "size": 35,
    //     "cluster": 1
    // },
    {
        "x": 55.7,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 65.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 65.8,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 75.22,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 75.89,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 85.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 85.95,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 85.95,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 88.2,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 95.1,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 95.25,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 95.5,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 95.85,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 95.85,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 95.89,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 98.34,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 98.34,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 105.25,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 105.75,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 105.9,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 115.4,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 115.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 115.85,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 120.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 125.4,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 125.9,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 135.85,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 135.85,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 145.2,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 145.25,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 145.3,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 150.45,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 155.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 155.9,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 165.3,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 165.4,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 170.6,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 175.45,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 180.99,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 185.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 185.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 185.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 185.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 185.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 185.2,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 190.75,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 195.6,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 198.75,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 205.1,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 210.6,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 210.99,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 210.99,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 215.9,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 220.2,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 220.5,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 225.85,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 235.4,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 235.95,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 240.3,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 245.1,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.67,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.67,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.67,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.67,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.67,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.67,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 245.75,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": 250.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 250.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 250.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 250.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 250.5,
        "y": "18-25",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 250.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 260.2,
        "y": "36-45",
        "size": 31,
        "cluster": 4
    },
    {
        "x": 280.4,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 290.15,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 295.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 295.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 295.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 295.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 295.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 295.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 315.8,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 325.7,
        "y": "60+",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 335.4,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 345.7,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 350.75,
        "y": "46-60",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 360.25,
        "y": "46-60",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 390.95,
        "y": "46-60",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 395.6,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 405.75,
        "y": "46-60",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 405.9,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 415.3,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 420.5,
        "y": "46-60",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 425.1,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": 450.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 450.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 450.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 450.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 450.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 450.75,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 480.4,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 495.2,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 500.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 505.3,
        "y": "46-60",
        "size": 24,
        "cluster": 0
    },
    {
        "x": 640.3,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 650.0,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 655.75,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 670.25,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 685.85,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 715.55,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 725.3,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 725.85,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    {
        "x": 735.95,
        "y": "36-45",
        "size": 50,
        "cluster": 3
    },
    // {
    //     "x": 999.99,
    //     "y": "26-35",
    //     "size": 35,
    //     "cluster": 1
    // },
    {
        "x": -320.0,
        "y": "60+",
        "size": 17,
        "cluster": 2
    },
    {
        "x": -200.0,
        "y": "26-35",
        "size": 35,
        "cluster": 1
    },
    {
        "x": -85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": -85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": -85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": -85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    },
    {
        "x": -85.3,
        "y": "18-25",
        "size": 50,
        "cluster": 3
    }
];

// Assign a unique colour per cluster
const clusterColours = {
    0: "hsl(var(--chart-1))",
    1: "hsl(var(--chart-2))",
    2: "hsl(var(--chart-3))",
    3: "hsl(var(--chart-4))",
    4: "hsl(var(--chart-5))",
  };
  
  export default function KMeansScatterPlot() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Customer Segmentation (K-Means)</CardTitle>
          <CardDescription>
            Clustered customer segments based on transaction behaviour. Excluding 5 outliers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="w-full h-[300px]"
            aria-label="A scatter chart with bubble sizes corresponding to transaction amounts."
          >
            <ScatterChart margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              {/* X-axis: numeric (transaction amount) */}
              <XAxis
                dataKey="x"
                name="Transaction Amount"
                type="number"
                label={{
                  value: "Transaction Amount (GBP)",
                  position: "insideBottomRight",
                  offset: 0,
                }}
              />
  
              {/* Y-axis: categorical (age group) */}
              <YAxis
                dataKey="y"
                name="Age Group"
                type="category"
                allowDuplicatedCategory={false}
                label={{
                  value: "Age Group",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
  
              {/*
                ZAxis: use the same transaction amount for bubble size.
                - scale="linear" allows negative or zero amounts
                - If you only deal with positive amounts, consider scale="sqrt"
                  for a more subtle size difference between large amounts.
              */}
              <ZAxis
                dataKey="x"
                name="Transaction Amount (Bubble Size)"
                range={[10, 200]}
                scale="linear" // or "sqrt" if all amounts are positive
              />
  
              <Tooltip />
              <Legend />
  
              {Object.entries(clusterColours).map(([cluster, colour]) => (
                <Scatter
                  key={cluster}
                  name={`Cluster ${cluster}`}
                  data={clusterData.filter((d) => d.cluster === Number(cluster))}
                  fill={colour}
                  stroke="#fff"
                  strokeWidth={1.5}
                />
              ))}
            </ScatterChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  }