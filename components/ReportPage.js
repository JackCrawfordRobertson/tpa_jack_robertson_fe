import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Dashboard from "@/components/Dashboard"; // Ensure the import is default if using JS
import ChartsSection from "@/components/ChartsSection"; // Ensure the import is default if using JS

export default function ReportPage() {
  return (
    <div className="container mx-auto max-w-6xl py-10">
      {/* Report Title */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">The Evolution of Digital Transactions: Key Consumer Insights from Payment Data Analysis</h1>
        <p className="text-muted-foreground">Updated: 25th Feb 2025</p>
        <Separator className="mt-4" />
      </header>

      {/* Summary Section */}
      <Card className="mb-6">
        <CardHeader>
        <h2 className="text-[1.8rem] font-semibold">Executive Summary</h2>
        <Separator className="mt-4" />

        </CardHeader>
        <CardContent>
          <p>
          In today’s evolving financial landscape, digital transactions are reshaping consumer behaviours across the globe. The rapid expansion of contactless and online payments means businesses must understand the factors behind successful transactions. This report focuses on reliable payment methods, device-specific performance and demographic nuances, using K-means clustering to group customers by age, device type and payment behaviour. By examining completion rates, chargebacks and processing delays, we identify strategies to build trust, streamline processes and create a more inclusive ecosystem.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
          Due to inconsistencies in time-based fields, we focused on cleaner columns in the collected data set. Although some date entries appeared, irregularities limited any reliable time-scale analysis. Instead, we offer a broad overview of transaction dynamics, spotlighting areas with consistent data. We also flagged outliers such as negative amounts for refunds ensuring transparency. This balanced approach preserves accuracy and integrity without discarding potentially valuable information.
          </p>
        </CardContent>
      </Card>

      {/* Dashboard */}
      <Dashboard />

      {/* Charts & Data Visualisation */}
      <ChartsSection />

      {/* Conclusion */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Conclusion & Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
          In conclusion, this analysis confirms credit cards as a reliable payment channel, digital wallets as a popular yet fraud-prone option and bank transfers as an occasionally cumbersome method, especially for older consumers. Device selection significantly influences transaction success, with mobile phones leading the field, while smartwatches and tablets demand improved interfaces. Age-based insights also show younger adults readily embracing fast, app-based flows, whereas seniors grapple with pending transactions and cumbersome verification. By using K-means clustering, we exposed pivotal behaviour patterns that inform targeted enhancements. Strengthening user experiences, fortifying security and upgrading dispute handling will create a more inclusive digital payment environment. With continued data cleansing—especially around time-based fields—future refinements may further improve the accuracy and utility of these findings, guiding businesses toward robust, customer-centric transaction processes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}