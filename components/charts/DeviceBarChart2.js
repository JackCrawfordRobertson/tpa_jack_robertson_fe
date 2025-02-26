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

// Raw device transaction data
const rawDeviceData = [
  {
    "Desktop": { Chargeback: 5.56, Completed: 47.22, Failed: 16.67, Pending: 30.56, Refunded: 0 },
    "Mobile": { Chargeback: 2.38, Completed: 84.52, Failed: 2.38, Pending: 3.57, Refunded: 7.14 },
    "Smartwatch": { Chargeback: 32.14, Completed: 21.43, Failed: 39.29, Pending: 7.14, Refunded: 0 },
    "Tablet": { Chargeback: 22.22, Completed: 11.11, Failed: 0, Pending: 55.56, Refunded: 11.11 },
  },
];

// Convert data for Recharts
const deviceTypes = Object.keys(rawDeviceData[0]);

const deviceChartData = deviceTypes.map((device) => ({
  name: device,
  Chargeback: rawDeviceData[0][device].Chargeback ?? 0,
  Completed: rawDeviceData[0][device].Completed ?? 0,
  Failed: rawDeviceData[0][device].Failed ?? 0,
  Pending: rawDeviceData[0][device].Pending ?? 0,
  Refunded: rawDeviceData[0][device].Refunded ?? 0,
}));

export default function DeviceBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Breakdown by Device</CardTitle>
        <CardDescription>Bar chart showing transaction types across different devices.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={deviceChartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="Chargeback" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Completed" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Failed" fill="hsl(var(--chart-3))" />
              <Bar dataKey="Pending" fill="hsl(var(--chart-4))" />
              <Bar dataKey="Refunded" fill="hsl(var(--chart-5))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}