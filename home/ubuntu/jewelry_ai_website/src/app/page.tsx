import Image from "next/image";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-indigo-800 mb-4">
                Vertical Search AI in the Jewelry Industry
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                A comprehensive analysis of AI-powered search solutions for jewelry retailers
                with specific recommendations for Wish Fine Jewelry.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/solutions" className="btn btn-primary">
                  Explore AI Solutions
                </a>
                <a href="/recommendations" className="btn btn-secondary">
                  View Recommendations
                </a>
              </div>
            </div>
            <div className="md:w-1/2 bg-indigo-100 flex items-center justify-center p-8">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-indigo-700 mb-2">AI</div>
                    <div className="text-2xl font-semibold text-indigo-600">for Jewelry Search</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="card">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Key Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">AI Solutions</h3>
              <p>
                Several specialized vertical search AI solutions exist for the jewelry industry,
                including Syte.ai, Google Vertex AI Search, Lily AI, and H2O.ai.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Implementation Benefits</h3>
              <p>
                Jewelry retailers implementing AI search solutions can see conversion rate increases
                of up to 689.6% and significant improvements in average order value.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">ROI Timeframe</h3>
              <p>
                Most AI implementations in the jewelry industry show positive ROI within 3-9 months,
                with some solutions paying for themselves in as little as 1-2 months.
              </p>
            </div>
          </div>
        </section>

        {/* Report Sections */}
        <section className="card">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Report Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/solutions" className="block group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">AI Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Overview of key vertical search AI solutions in the jewelry industry
                </p>
                <span className="text-indigo-600 group-hover:text-indigo-800">Read more →</span>
              </div>
            </a>
            <a href="/deployment" className="block group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Deployment Scenarios</h3>
                <p className="text-gray-600 mb-4">
                  Common deployment scenarios and use cases for AI in jewelry retail
                </p>
                <span className="text-indigo-600 group-hover:text-indigo-800">Read more →</span>
              </div>
            </a>
            <a href="/pricing" className="block group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Pricing Models</h3>
                <p className="text-gray-600 mb-4">
                  Analysis of pricing structures and ROI considerations
                </p>
                <span className="text-indigo-600 group-hover:text-indigo-800">Read more →</span>
              </div>
            </a>
            <a href="/value-chain" className="block group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Value Chain Coverage</h3>
                <p className="text-gray-600 mb-4">
                  How AI solutions serve different parts of the jewelry value chain
                </p>
                <span className="text-indigo-600 group-hover:text-indigo-800">Read more →</span>
              </div>
            </a>
            <a href="/comparison" className="block group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Solution Comparison</h3>
                <p className="text-gray-600 mb-4">
                  Differentiation factors between competing AI solutions
                </p>
                <span className="text-indigo-600 group-hover:text-indigo-800">Read more →</span>
              </div>
            </a>
            <a href="/recommendations" className="block group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 group-hover:shadow-md group-hover:border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Strategic AI implementation recommendations for Wish Fine Jewelry
                </p>
                <span className="text-indigo-600 group-hover:text-indigo-800">Read more →</span>
              </div>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="card">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">About This Research</h2>
          <p className="text-gray-700">
            This comprehensive research examines vertical search AI solutions in the jewelry industry, 
            with a specific focus on how these technologies can be implemented by Wish Fine Jewelry to 
            improve sales and enhance customer experience. The research covers deployment scenarios, 
            pricing models, value chain coverage, and differentiation factors among leading solutions.
          </p>
          <p className="text-gray-700">
            Based on a thorough analysis of Wish Fine Jewelry's current website and capabilities, we 
            provide strategic recommendations for AI implementation that could significantly increase 
            conversion rates, average order value, and customer loyalty.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
