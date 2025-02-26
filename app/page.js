import ReportPage from "@/components/ReportPage";
import Footer from "@/components/Footer"; // Import the Footer component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <ReportPage />
      </div>
      <Footer />
    </div>
  );
}