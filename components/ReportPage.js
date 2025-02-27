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
          In today’s evolving financial landscape, digital transactions are reshaping consumer behaviours across the globe. The rapid expansion of contactless and online payments means businesses must understand the factors behind successful transactions. This report focuses on reliable payment methods, device-specific performance and demographic nuances. Unlike traditional segmentation, we applied K-Medoids clustering, which allows for more precise grouping based on real-world transaction behaviour rather than statistical assumptions. This method provides a clearer view of successful transactions, chargebacks, and technical failures, helping businesses identify opportunities to enhance security, reduce processing delays, and improve the customer experience.
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
          In conclusion, this analysis confirms that credit cards remain the most reliable payment method, while digital wallets offer convenience but suffer from high failure rates, particularly for smartwatch users. Bank transfers continue to be slow and prone to pending transactions, especially for older consumers. Device selection directly impacts transaction success, with mobile phones performing best, whereas smartwatches experience high failure rates, likely due to authentication issues or limited merchant acceptance. Older users (46-60) relying on debit and credit cards form the dominant transaction group, with Cluster 4 highlighting a strong correlation between smartwatch payments and failed transactions. Outlier clusters (1, 2, 3) suggest rare or extreme spending patterns, potentially reflecting corporate spending, niche purchasing habits, or fraudulent activity. By leveraging K-Medoids clustering, we’ve exposed key customer behaviour trends that can drive targeted improvements, such as enhancing smartwatch transaction experiences, strengthening fraud detection for digital wallets, and streamlining verification for bank transfers. To refine future analyses, improving time-based data collection will be crucial for accurately mapping user trends over time. Lastly, addressing missing data through imputation techniques could enhance dataset integrity and improve analytical accuracy, ensuring a more reliable foundation for future insights. However, due to the limitations of the provided dataset, we cannot confidently implement imputation at this stage. Further refinement of data collection processes will be necessary to ensure accuracy and reliability in future analyses.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}