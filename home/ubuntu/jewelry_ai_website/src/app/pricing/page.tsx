import MainLayout from "@/components/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1>Pricing Models and ROI Considerations</h1>
        
        <section className="card">
          <h2>Common Pricing Models</h2>
          <p>
            Vertical search AI solutions in the jewelry industry employ several pricing models, each with different advantages and considerations for retailers.
          </p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Usage-Based Pricing</h3>
              <p className="mb-3">
                Pay based on the volume of searches or queries processed by the system.
              </p>
              <ul>
                <li><strong>Example:</strong> Google Cloud's Vertex AI Search for Commerce: $2.50 per 1,000 search or browse queries</li>
                <li>No charge for importing or managing user events or catalog information</li>
                <li>A jewelry retailer with 15 million keyword search queries and 10 million browse queries in one month would pay $62,500</li>
                <li>Free credits available for recommendations features ($600 when signing up)</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Tiered Subscription Models</h3>
              <p className="mb-3">
                Monthly or annual subscription fees based on feature sets and usage limits.
              </p>
              <ul>
                <li><strong>Example:</strong> H2O.ai: Starting price reported at $6,900 annually</li>
                <li>Pricing appears to be on the higher end (indicated by $$$$$ rating on SelectHub)</li>
                <li>Suitable for medium to large enterprises</li>
                <li>Offers both cloud and on-premises deployment options</li>
                <li>Requires requesting a quote for specific pricing</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Custom Enterprise Pricing</h3>
              <p className="mb-3">
                Tailored pricing based on specific business needs and implementation scope.
              </p>
              <ul>
                <li><strong>Example:</strong> Syte.ai: No public pricing available</li>
                <li>Requires contacting sales for a custom quote</li>
                <li>Pricing likely based on volume of searches, size of product catalog, implementation complexity, and level of customization required</li>
                <li>Targets fashion and jewelry retailers specifically</li>
                <li>Offers multiple deployment options (website, mobile app, in-store)</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Freemium Models</h3>
              <p className="mb-3">
                Basic functionality offered for free with premium features at additional cost.
              </p>
              <ul>
                <li>Some visual search providers offer limited free tier with basic functionality</li>
                <li>Premium features at additional cost</li>
                <li>Upgrade paths based on usage volume or feature access</li>
                <li>This model appears less common among specialized jewelry industry solutions</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Pricing Factors</h2>
          <p>
            Several factors influence the pricing of vertical search AI solutions for jewelry retailers.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Scale of Implementation</h3>
              <ul>
                <li><strong>Search Volume:</strong> Number of visual searches performed monthly</li>
                <li><strong>Catalog Size:</strong> Number of products in the jewelry inventory</li>
                <li><strong>User Base:</strong> Size of customer base using the search functionality</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Feature Set</h3>
              <ul>
                <li><strong>Basic Visual Search:</strong> Lower cost for simple image matching</li>
                <li><strong>Advanced AI Features:</strong> Higher cost for additional capabilities like personalized recommendations, automated product tagging, style clustering, cross-selling suggestions, and social media integration</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Integration Complexity</h3>
              <ul>
                <li><strong>Standalone Implementation:</strong> Lower cost for out-of-box solutions</li>
                <li><strong>Custom Integration:</strong> Higher cost for solutions requiring integration with existing e-commerce platforms, custom UI development, backend system connections, and data migration and preparation</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Service Level</h3>
              <ul>
                <li><strong>Self-Service:</strong> Lower cost for DIY implementation</li>
                <li><strong>Managed Service:</strong> Higher cost for solutions including implementation support, ongoing optimization, technical maintenance, and training and support</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>ROI Considerations</h2>
          <p>
            When evaluating the return on investment for vertical search AI solutions, jewelry retailers should consider several key metrics and benefits.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Conversion Impact</h3>
              <ul>
                <li>Visual search users convert at rates up to 689.6% higher (according to Syte.ai)</li>
                <li>Average order value increases of approximately 10% reported</li>
                <li>Reduced cart abandonment rates</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Operational Efficiency</h3>
              <ul>
                <li>Reduced need for manual product tagging</li>
                <li>Improved inventory management</li>
                <li>Better trend identification and forecasting</li>
                <li>Streamlined merchandising decisions</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Customer Experience Value</h3>
              <ul>
                <li>Enhanced discovery experience</li>
                <li>Reduced search friction</li>
                <li>Improved customer satisfaction and loyalty</li>
                <li>Higher repeat purchase rates</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Sample ROI Calculation</h2>
          <p>
            Below is a sample ROI calculation for a mid-sized jewelry retailer implementing visual search AI:
          </p>
          
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Before AI Implementation</th>
                  <th>After AI Implementation</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Visitors</td>
                  <td>50,000</td>
                  <td>50,000</td>
                  <td>No change</td>
                </tr>
                <tr>
                  <td>Conversion Rate</td>
                  <td>2.0%</td>
                  <td>3.5%</td>
                  <td>+75%</td>
                </tr>
                <tr>
                  <td>Monthly Orders</td>
                  <td>1,000</td>
                  <td>1,750</td>
                  <td>+750 orders</td>
                </tr>
                <tr>
                  <td>Average Order Value</td>
                  <td>$300</td>
                  <td>$330</td>
                  <td>+10%</td>
                </tr>
                <tr>
                  <td>Monthly Revenue</td>
                  <td>$300,000</td>
                  <td>$577,500</td>
                  <td>+$277,500</td>
                </tr>
                <tr>
                  <td>Annual Revenue Increase</td>
                  <td colSpan={3}>$3,330,000</td>
                </tr>
                <tr>
                  <td>Annual AI Solution Cost</td>
                  <td colSpan={3}>$120,000</td>
                </tr>
                <tr>
                  <td>ROI (First Year)</td>
                  <td colSpan={3}>2,775%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-sm text-gray-600">
            Note: This is a simplified example. Actual results will vary based on implementation quality, existing conversion rates, product catalog, and customer base.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
