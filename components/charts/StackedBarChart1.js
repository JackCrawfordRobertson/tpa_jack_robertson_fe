"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Raw data
const rawData = [
  {
    "Bank Transfer": { Chargeback: 2, Completed: 2, Failed: 5, Pending: 8, Refunded: 1 },
    "Credit Card": { Chargeback: 0, Completed: 34, Failed: 0, Pending: 0, Refunded: 1 },
    "Debit Card": { Chargeback: 3, Completed: 4, Failed: 8, Pending: 0, Refunded: 0 },
    "Digital Wallet": { Chargeback: 8, Completed: 39, Failed: 2, Pending: 4, Refunded: 5 },
    "Mobile Payment": { Chargeback: 2, Completed: 16, Failed: 4, Pending: 9, Refunded: 0 },
  },
];

// Convert data to array format for Recharts
const paymentMethods = Object.keys(rawData[0]);

const chartData = paymentMethods.map((method) => ({
  name: method,
  Chargeback: rawData[0][method].Chargeback ?? 0,
  Completed: rawData[0][method].Completed ?? 0,
  Failed: rawData[0][method].Failed ?? 0,
  Pending: rawData[0][method].Pending ?? 0,
  Refunded: rawData[0][method].Refunded ?? 0,
}));

export default function StackedBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method Transaction Breakdown</CardTitle>
        <CardDescription>Stacked bar chart showing transaction statuses per payment method.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="Chargeback" stackId="a" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Completed" stackId="a" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Failed" stackId="a" fill="hsl(var(--chart-3))" />
              <Bar dataKey="Pending" stackId="a" fill="hsl(var(--chart-4))" />
              <Bar dataKey="Refunded" stackId="a" fill="hsl(var(--chart-5))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}