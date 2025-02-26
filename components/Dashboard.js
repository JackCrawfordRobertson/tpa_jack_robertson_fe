"use client";

import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarRadiusAxis,
  Label,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Replace with your actual metrics
const transactionSuccessCompleted = 60.51;
const transactionSuccessFailed = 12.1;
const transactionSuccessChargeback = 9.55;
const mostReliablePaymentMethod = "Credit card";
const methodSuccessRate = 100;
const highestRiskDevice = "Smartwatch";
const deviceChargebackRate = 32.14;
const mostActiveCustomerSegment = "18-25";
const segmentTransactionCount = 41;
const inStoreDigitalWalletGrowth = 900;

// --------------------------------------
// CHART 1: Transaction Success vs Failed
// --------------------------------------
const chartData1 = [
  {
    name: "Transactions",
    completed: transactionSuccessCompleted,
    failed: transactionSuccessFailed,
  },
];

// Just use plain objects without “satisfies ChartConfig”
const chartConfig1 = {
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-2))",
  },
  failed: {
    label: "Failed",
    color: "hsl(var(--chart-1))",
  },
};

// --------------------------------------
// CHART 2: Device Chargebacks
// --------------------------------------
const chartData2 = [
  {
    name: highestRiskDevice,
    nonChargeback: 100 - deviceChargebackRate,
    chargeback: deviceChargebackRate,
  },
];
const chartConfig2 = {
  nonChargeback: {
    label: "Non-Chargeback",
    color: "hsl(var(--chart-3))",
  },
  chargeback: {
    label: "Chargeback",
    color: "hsl(var(--chart-4))",
  },
};

// --------------------------------------
// CHART 3: Most Reliable Payment Method
// --------------------------------------
const chartData3 = [
  {
    name: mostReliablePaymentMethod,
    success: methodSuccessRate,
    remainder: 100 - methodSuccessRate,
  },
];
const chartConfig3 = {
  success: {
    label: "Success",
    color: "hsl(var(--chart-1))",
  },
  remainder: {
    label: "Remainder",
    color: "hsl(var(--chart-2))",
  },
};

// --------------------------------------
// CHART 4: In-Store Digital Wallet Growth
// --------------------------------------
const chartData4 = [
  {
    name: "In-Store Wallet Growth",
    growth: inStoreDigitalWalletGrowth,
  },
];
const chartConfig4 = {
  growth: {
    label: "Growth",
    color: "hsl(var(--chart-2))",
  },
};

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4 p-0 md:grid-cols-2">
      {/* Chart 1 */}
      <Card>
        <CardHeader className="items-center pb-0">
          <CardTitle>Transaction Success vs Failed</CardTitle>
          <CardDescription>
            Completed: {transactionSuccessCompleted}% . Failed: {transactionSuccessFailed}%
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer config={chartConfig1} className="mx-auto aspect-square w-full max-w-[250px]">
            <RadialBarChart
              data={chartData1}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      const total = transactionSuccessCompleted + transactionSuccessFailed;
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {total.toFixed(2)}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground text-sm"
                          >
                            Success + Fail
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="completed"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-completed)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="failed"
                fill="var(--color-failed)"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm">
          Chargeback Rate: {transactionSuccessChargeback}%
        </CardFooter>
      </Card>

      {/* Chart 2 */}
      <Card>
        <CardHeader className="items-center pb-0">
          <CardTitle>Device Chargeback Rate</CardTitle>
          <CardDescription>
            {highestRiskDevice}: {deviceChargebackRate}%
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer config={chartConfig2} className="mx-auto aspect-square w-full max-w-[250px]">
            <RadialBarChart
              data={chartData2}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {deviceChargebackRate}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground text-sm"
                          >
                            Chargebacks
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="nonChargeback"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-nonChargeback)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="chargeback"
                fill="var(--color-chargeback)"
                stackId="a"
                cornerRadius={5}
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm">
        Chargeback Device: {highestRiskDevice}
        </CardFooter>
      </Card>

      {/* Chart 3 */}
      <Card>
        <CardHeader className="items-center pb-0">
          <CardTitle>Most Reliable Method</CardTitle>
          <CardDescription>
            {mostReliablePaymentMethod} . {methodSuccessRate}% success
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer config={chartConfig3} className="mx-auto aspect-square w-full max-w-[250px]">
            <RadialBarChart
              data={chartData3}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {methodSuccessRate}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground text-sm"
                          >
                            {mostReliablePaymentMethod}
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="success"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-success)"
                className="stroke-transparent stroke-2"
              />
              <RadialBar
                dataKey="remainder"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-remainder)"
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm">
          100% indicates zero recorded failures.
        </CardFooter>
      </Card>

      {/* Chart 4 */}
      <Card>
        <CardHeader className="items-center pb-0">
          <CardTitle>Most Active Customer Segment</CardTitle>
          <CardDescription>18-25</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer config={chartConfig4} className="mx-auto aspect-square w-full max-w-[250px]">
            <RadialBarChart
              data={chartData4}
              endAngle={180}
              innerRadius={80}
              outerRadius={130}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            41
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-muted-foreground text-sm"
                          >
                            Transactions
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="growth"
                cornerRadius={5}
                fill="var(--color-growth)"
                className="stroke-transparent stroke-2"
              />
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm">
          Followed by 26-35 . 35 transactions
        </CardFooter>
      </Card>
    </div>
  );
}