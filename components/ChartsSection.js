import StackedBarChart from "@/components/charts/StackedBarChart1";
import DeviceBarChart from "@/components/charts/DeviceBarChart2";
import KMeansScatterPlot from "@/components/charts/KMeansScatterPlotChart4";
import { Separator } from "@/components/ui/separator";


export default function ChartsSection() {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white mt-8">
<h2 className="text-[1.8rem] font-semibold">Deep Dive</h2>
        <Separator className="mt-4" />

            {/* Transaction Success vs Failed */}
            <h4 className="text-lg font-bold mt-4">Transaction Success Rate</h4>
            <p className="text-l mt-2">
                Payment method reliability is crucial. Credit cards show a 95.3 percent completion rate, boosted by
                advanced fraud detection. Digital wallets enjoy high adoption yet have a 16.3 percent chargeback rate,
                signalling a need for stronger security. Bank transfers, with a 50 percent pending rate, highlight
                slower verification that frustrates users. Mobile payments (88.2 percent completion) offer speed but
                also require vigilant fraud prevention. Bolstering security and refining verification steps for each
                method can further enhance success rates.
            </p>

            {/* Stacked Bar Chart: Payment Method Breakdown */}
            <div className="mt-6">
                <StackedBarChart />
            </div>

            {/* Device Chargeback Rate */}
            <h4 className="text-lg font-bold mt-4">Chargeback Risk by Device</h4>
            <p className="text-l mt-2">
                Device choice also shapes outcomes. Mobile phones, failing just 2.38 percent of the time, benefit from
                biometric authentication and refined interfaces. Smartwatches face a 39.29 percent failure rate and a
                32.14 percent chargeback rate, reflecting limited acceptance and user confusion. Tablets endure a 55.56
                percent pending rate, suggesting technical hurdles for older users. Clearer prompts, simpler navigation
                and merchant training could reduce smartwatch and tablet errors, leading to more consistent performance
                across devices.
            </p>

            {/* Stacked Bar Chart: Payment Method Breakdown */}
            <div className="mt-6">
                <DeviceBarChart />
            </div>

            {/* Most Reliable Payment Method */}
            <h4 className="text-lg font-bold mt-4">Most Reliable Payment Method</h4>
            <p className="text-l mt-2">
                Age group patterns further reveal significant insights. Customers aged 26–35 show a 97.14 percent
                completion rate, reflecting their comfort with mobile apps and digital-first solutions. By contrast,
                individuals aged 46–60 exhibit a 34.48 percent chargeback rate, suggesting inadequate dispute processes
                or heightened susceptibility to fraud, especially with debit cards. Seniors over 60 demonstrate a 44.44
                percent pending rate, often stemming from slower bank transfers or complex authentication steps.
                Tailored interfaces, educational tools and alternative payment pathways may help expedite these
                transactions for older users.
            </p>

            {/* Most Active Customer Segment */}
            <h4 className="text-lg font-bold mt-4">Most Active Customer Segment</h4>
            <p className="text-l mt-2">
                Our data indicates that online transactions (58 total) remain dominant, although in-store channels still
                matter with 35 recorded transactions. Consumers aged 36–45 show strong adoption of digital wallets
                in-store, proving that physical retail retains relevance. Subscriptions (18 transactions) highlight a
                shift to recurring billing but often suffer delayed bank transfers, thus boosting pending statuses.
                Streamlining subscription management with automated renewals, real-time confirmations and frictionless
                checkout could speed processing and heighten customer confidence.
            </p>

            <p className="text-l mt-2">
                K-means clustering, facilitated by numerically encoding categorical variables such as device type and
                payment method, allowed us to group similar customers effectively. One cluster spotlights older in-store
                shoppers (46–60) relying on smartwatches and debit cards, facing high chargeback rates. Another isolates
                younger online credit card users (26–35) with near-perfect completion, signalling an opportunity for
                premium loyalty incentives. Seniors relying on bank transfers for subscriptions form another cluster,
                defined by high pending rates. This segmentation demonstrates how focusing on each group’s unique needs
                can drive better outcomes.
            </p>

            <p className="text-l mt-2">
                These insights yield clear recommendations. Improving smartwatch and tablet user experiences could lower
                failure rates, especially among older or less tech-savvy users. Strengthening fraud detection for
                digital wallets is essential for trimming chargebacks without reducing convenience. Providing simplified
                e-wallets or faster verification may lessen older users’ reliance on slow bank transfers. For the 46–60
                age bracket, refining dispute resolution processes could curb chargeback volumes and boost confidence.
                Finally, mobile-first rewards could reinforce loyalty among the 26–35 segment, leveraging their high
                completion rates for credit cards and digital apps. Rigorous data validation and consistent security
                measures across all payment channels will foster sustained consumer trust.
            </p>
            <h4 className="text-lg font-bold mt-4">Customer Segmentation Insights</h4>
            <p className="text-l mt-2">
                Our K-Means clustering has identified distinct customer groups based on transaction behaviour:
            </p>

            <ul className="list-disc ml-6 text-l mt-2">
                <li>
                    <strong>Older In-Store Shoppers (Cluster 0)</strong>: Debit card users (46-60 years old) with high
                    chargeback rates, often using smartwatches in-store.
                    
                </li>
                <li>
                    <strong>High-Spending Digital Credit Card Users (Cluster 1)</strong>: Online shoppers (26-35 years
                    old) primarily using mobile and credit cards.
                   
                </li>
                <li>
                    <strong>Subscription-Based Seniors (Cluster 2)</strong>: Bank transfer users (60+ years old) with
                    high pending transaction rates.
                   
                </li>
                <li>
                    <strong>Mobile Wallet Users In-Store (Cluster 3)</strong>: Digital wallet users (36-45 years old)
                    making in-store purchases.
                   
                </li>
                <li>
                    <strong>Young Mobile-First App Users (Cluster 4)</strong>: 18-25-year-olds favouring mobile
                    transactions but still using desktops.
                </li>
            </ul>

            {/* Stacked Bar Chart: Payment Method Breakdown */}
            <div className="mt-6">
                <KMeansScatterPlot />
            </div>
        </div>
    );
}
