import MainLayout from "@/components/MainLayout";

export default function Recommendations() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1>AI Recommendations for Wish Fine Jewelry</h1>
        
        <section className="card">
          <h2>Executive Summary</h2>
          <p>
            Wish Fine Jewelry offers premium jewelry products through a well-designed e-commerce platform. However, the site currently lacks advanced AI-powered features that could significantly enhance product discovery, personalization, and customer engagement. Implementing vertical search AI solutions would address these limitations and potentially increase conversion rates, average order value, and customer loyalty.
          </p>
        </section>
        
        <section className="card">
          <h2>Recommended AI Implementations</h2>
          
          <div className="mt-6 space-y-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">1. Visual Search Implementation</h3>
              
              <p className="mb-3"><strong>Recommendation:</strong> Implement a visual search solution that allows customers to upload images to find similar jewelry pieces.</p>
              
              <p className="mb-3"><strong>Specific Solution:</strong> Syte.ai's visual search technology, which is specifically optimized for jewelry with high accuracy for fine details like gemstone cuts, settings, and metal textures.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Implementation Approach:</h4>
                  <ul>
                    <li>Add a camera icon to the search bar</li>
                    <li>Implement "Shop Similar" buttons on product detail pages</li>
                    <li>Create an inspiration gallery where customers can upload images from social media</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Expected Benefits:</h4>
                  <ul>
                    <li>3-5x higher conversion rates for visual search users compared to text search</li>
                    <li>Capture inspiration-driven purchases from social media and other sources</li>
                    <li>Reduce search abandonment by helping customers find exactly what they're looking for</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4"><strong>Cost Consideration:</strong> Custom pricing based on catalog size (approximately 633+ products). Estimated monthly subscription in the $1,000-$2,500 range, plus implementation costs for Shopify integration.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">2. Enhanced Product Discovery with AI-Powered Recommendations</h3>
              
              <p className="mb-3"><strong>Recommendation:</strong> Implement an AI-powered recommendation engine that suggests complementary pieces and personalized recommendations.</p>
              
              <p className="mb-3"><strong>Specific Solution:</strong> Lily AI's product discovery platform with its consumer language mapping capabilities to bridge the gap between how customers describe jewelry and how products are cataloged.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Implementation Approach:</h4>
                  <ul>
                    <li>"Complete the Look" recommendations on product pages</li>
                    <li>"You Might Also Like" sections based on browsing history</li>
                    <li>Personalized homepage recommendations for returning visitors</li>
                    <li>Email recommendations for abandoned carts and post-purchase follow-ups</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Expected Benefits:</h4>
                  <ul>
                    <li>15-30% increase in average order value</li>
                    <li>Improved cross-selling of complementary pieces (e.g., matching earrings for necklaces)</li>
                    <li>Higher customer engagement with more relevant product suggestions</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4"><strong>Cost Consideration:</strong> Custom pricing based on implementation scope. Estimated $1,500-$3,000 monthly for a catalog of Wish Fine Jewelry's size, plus one-time implementation and integration costs.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">3. Virtual Try-On Experience</h3>
              
              <p className="mb-3"><strong>Recommendation:</strong> Implement an AR-based virtual try-on solution for key jewelry categories, particularly earrings and necklaces.</p>
              
              <p className="mb-3"><strong>Specific Solution:</strong> Partner with a specialized jewelry AR provider that can accurately render fine jewelry details and gemstone reflections.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Implementation Approach:</h4>
                  <ul>
                    <li>Add "Try On" buttons to product pages for compatible items</li>
                    <li>Implement both webcam-based try-on for desktop and camera-based for mobile</li>
                    <li>Create shareable try-on experiences for social media</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Expected Benefits:</h4>
                  <ul>
                    <li>Reduced hesitation for high-value purchases</li>
                    <li>20-40% higher conversion rates for items with virtual try-on</li>
                    <li>Increased time spent on site and engagement metrics</li>
                    <li>Social sharing potential for brand awareness</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4"><strong>Cost Consideration:</strong> Implementation costs of $15,000-$30,000, monthly licensing fees of $1,000-$2,000, plus ongoing maintenance and updates.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">4. AI-Powered Search Enhancement</h3>
              
              <p className="mb-3"><strong>Recommendation:</strong> Upgrade the current text search with AI capabilities to understand customer intent and natural language queries.</p>
              
              <p className="mb-3"><strong>Specific Solution:</strong> Google Vertex AI Search for commerce with its transparent pricing model of $2.50 per 1,000 queries.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Implementation Approach:</h4>
                  <ul>
                    <li>Replace the current search functionality with Google Vertex AI Search</li>
                    <li>Implement semantic search understanding for natural language queries</li>
                    <li>Add search suggestions and autocomplete powered by AI</li>
                    <li>Integrate with the visual search solution for a unified search experience</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Expected Benefits:</h4>
                  <ul>
                    <li>Higher search relevance and fewer "no results" experiences</li>
                    <li>Ability to handle complex queries like "anniversary gift under $2,000"</li>
                    <li>Improved search conversion rates by 20-30%</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4"><strong>Cost Consideration:</strong> Usage-based pricing at $2.50 per 1,000 queries. For an estimated 10,000 monthly searches, approximately $25 per month, plus implementation costs for Shopify integration.</p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">5. Personalized Customer Journey</h3>
              
              <p className="mb-3"><strong>Recommendation:</strong> Implement AI-driven personalization throughout the customer journey, from homepage to checkout.</p>
              
              <p className="mb-3"><strong>Specific Solution:</strong> A combination of solutions including Lily AI for product discovery and a customer data platform for personalization.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Implementation Approach:</h4>
                  <ul>
                    <li>Personalized homepage content based on browsing history and preferences</li>
                    <li>Dynamic product sorting based on individual preferences</li>
                    <li>Tailored email marketing with AI-selected product recommendations</li>
                    <li>Personalized promotions based on customer behavior and preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-2">Expected Benefits:</h4>
                  <ul>
                    <li>15-25% increase in conversion rates</li>
                    <li>Higher customer retention and repeat purchase rates</li>
                    <li>Improved customer satisfaction and loyalty</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4"><strong>Cost Consideration:</strong> Combined solution costs of approximately $2,000-$4,000 monthly, plus implementation and integration costs.</p>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Implementation Roadmap</h2>
          
          <div className="mt-6 space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Phase 1: Foundation (Months 1-2)</h3>
              <ol className="list-decimal pl-6">
                <li>Implement Google Vertex AI Search to enhance basic search functionality</li>
                <li>Set up analytics to establish baseline metrics for future comparison</li>
                <li>Begin data collection for personalization initiatives</li>
              </ol>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Phase 2: Core AI Features (Months 3-4)</h3>
              <ol className="list-decimal pl-6">
                <li>Implement Syte.ai visual search solution</li>
                <li>Integrate basic product recommendations on product pages</li>
                <li>Launch A/B testing to measure impact</li>
              </ol>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Phase 3: Advanced Features (Months 5-7)</h3>
              <ol className="list-decimal pl-6">
                <li>Implement virtual try-on for key product categories</li>
                <li>Enhance recommendation engine with cross-category suggestions</li>
                <li>Develop personalized email marketing with AI recommendations</li>
              </ol>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Phase 4: Full Personalization (Months 8-10)</h3>
              <ol className="list-decimal pl-6">
                <li>Implement comprehensive personalization across the customer journey</li>
                <li>Integrate all AI systems for a unified customer experience</li>
                <li>Optimize based on performance data</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>ROI Projection</h2>
          <p>
            Based on industry benchmarks and case studies from similar implementations:
          </p>
          
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th>AI Implementation</th>
                  <th>Estimated Annual Cost</th>
                  <th>Projected Revenue Increase</th>
                  <th>ROI Timeframe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Visual Search</td>
                  <td>$18,000-$30,000</td>
                  <td>10-15% increase in conversion rate</td>
                  <td>4-6 months</td>
                </tr>
                <tr>
                  <td>AI Recommendations</td>
                  <td>$18,000-$36,000</td>
                  <td>15-30% increase in AOV</td>
                  <td>3-5 months</td>
                </tr>
                <tr>
                  <td>Virtual Try-On</td>
                  <td>$27,000-$54,000</td>
                  <td>20-40% increase for applicable products</td>
                  <td>6-9 months</td>
                </tr>
                <tr>
                  <td>Enhanced Search</td>
                  <td>$300-$600 + implementation</td>
                  <td>20-30% increase in search conversion</td>
                  <td>1-2 months</td>
                </tr>
                <tr>
                  <td>Personalization</td>
                  <td>$24,000-$48,000</td>
                  <td>15-25% overall conversion increase</td>
                  <td>5-7 months</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-6">
            <strong>Total Estimated Annual Investment:</strong> $87,300-$168,600<br />
            <strong>Projected Annual Revenue Increase:</strong> For a business with $5M annual revenue, a conservative 15% increase would yield $750,000 in additional revenue.
          </p>
        </section>
        
        <section className="card">
          <h2>Conclusion</h2>
          <p>
            Implementing vertical search AI solutions presents a significant opportunity for Wish Fine Jewelry to enhance the customer experience, increase sales, and gain competitive advantage. The recommended approach focuses on five key areas: visual search, AI-powered recommendations, virtual try-on, enhanced text search, and personalization.
          </p>
          <p>
            By following the proposed implementation roadmap and focusing on measurable KPIs, Wish Fine Jewelry can expect to see substantial improvements in conversion rates, average order val
(Content truncated due to size limit. Use line ranges to read in chunks)