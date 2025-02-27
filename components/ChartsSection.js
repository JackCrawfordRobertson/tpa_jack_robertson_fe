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
    K-Medoids clustering, which groups customers based on real-world transaction behaviour, allowed us to identify clear spending patterns. 
    One cluster highlights middle-aged in-store shoppers (46–60) who primarily use debit and credit cards, indicating reliability but also 
    notable chargeback concerns. Another cluster isolates younger online credit card users (26–35) with high transaction success rates, 
    suggesting an opportunity for premium loyalty incentives. Seniors relying on bank transfers for subscriptions form another group, 
    facing high pending transaction rates due to slower verification. Additionally, smartwatch-based transactions exhibit higher-than-usual 
    failure rates, pointing to usability challenges or merchant limitations. These findings underscore the need for more tailored payment 
    experiences to improve user satisfaction and security.
</p>

<p className="text-l mt-2">
    These insights lead to clear recommendations. Optimising smartwatch transactions could lower failure rates, especially among 
    older or less tech-savvy users. Strengthening fraud detection for digital wallets is crucial to reducing chargebacks without compromising 
    convenience. Enhancing bank transfer verification may help seniors facing delays, while improving dispute resolution for the 46–60 age 
    group could reduce chargeback rates. Lastly, introducing mobile-first rewards could drive engagement among the 26–35 digital-native 
    segment, leveraging their strong success rates with credit cards and app-based transactions. These refinements, alongside rigorous 
    data validation and security improvements, will reinforce consumer trust across all payment methods.
</p>

<h4 className="text-lg font-bold mt-4">Customer Segmentation Insights</h4>

<p className="text-l mt-2">
    Our K-Medoids clustering analysis revealed distinct customer behaviour patterns based on transaction activity:
</p>
<ul className="list-disc ml-6 text-l mt-2">
    <li>
        <strong>Dominant Segment: Middle-Aged Card Users (Cluster 0)</strong>: 46–60-year-olds making in-store purchases with debit/credit cards.
        Reliable transactions but with moderate chargeback risks.
    </li>
    <li>
        <strong>Smartwatch Transactions with High Failures (Cluster 4)</strong>: Smartwatch users face elevated failure rates.
        Likely due to authentication issues or limited merchant support.
    </li>
    <li>
        <strong>High-Spending Digital Credit Card Users (Cluster 1)</strong>: 26–35-year-olds shopping online via mobile and credit cards.
        High transaction success with minimal disruptions.
    </li>
    <li>
        <strong>Subscription-Based Seniors (Cluster 2)</strong>: 60+ bank transfer users with high pending rates.
        Slower verification and processing create delays.
    </li>
    <li>
        <strong>Outlier Transactions (Clusters 1, 2, 3)</strong>: Low-volume but high-value transactions.
        Possibly linked to niche purchases, fraud risks, or unusual spending patterns.
    </li>
</ul>

            {/* Stacked Bar Chart: Payment Method Breakdown */}
            <div className="mt-6">
                <KMeansScatterPlot />
            </div>
        </div>
    );
}
