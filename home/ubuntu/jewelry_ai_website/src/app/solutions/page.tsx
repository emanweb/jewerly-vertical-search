import MainLayout from "@/components/MainLayout";

export default function Solutions() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1>Vertical Search AI Solutions in the Jewelry Industry</h1>
        
        <section className="card">
          <h2>Overview of Key Solutions</h2>
          <p>
            Several vertical search AI solutions have emerged to serve the jewelry industry, each with unique capabilities and approaches. These solutions leverage advanced technologies like visual recognition, natural language processing, and recommendation engines to enhance the jewelry shopping experience.
          </p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Syte.ai</h3>
              <ul>
                <li>Specialized visual search platform optimized for jewelry</li>
                <li>Focuses on fine details like gemstone cuts, settings, and metal textures</li>
                <li>Offers complementary features like automated product tagging and recommendations</li>
                <li>Claims conversion rate increases of up to 689.6% for visual search users</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Google Vertex AI Search for Commerce</h3>
              <ul>
                <li>General retail search solution adaptable to jewelry</li>
                <li>Combines text and visual search capabilities</li>
                <li>Transparent usage-based pricing model</li>
                <li>Part of broader Google Cloud ecosystem with integration capabilities</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Lily AI</h3>
              <ul>
                <li>Focuses on consumer language mapping to product attributes</li>
                <li>Bridges the gap between how customers describe jewelry and how retailers catalog it</li>
                <li>Comprehensive retail value chain coverage</li>
                <li>Emphasizes natural language understanding for better search relevance</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">H2O.ai</h3>
              <ul>
                <li>Customizable, open-source foundation for AI implementations</li>
                <li>Requires more technical expertise but offers flexibility</li>
                <li>Includes advanced analytics capabilities beyond search</li>
                <li>Suitable for larger enterprises with data science resources</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Core Technologies</h2>
          <p>
            These solutions leverage several key technologies to deliver enhanced search and discovery experiences for jewelry retailers and their customers.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Visual Recognition Algorithms</h3>
              <ul>
                <li>Deep learning models trained on jewelry-specific datasets</li>
                <li>Image recognition capabilities for identifying similar styles, gemstones, and settings</li>
                <li>Feature extraction to understand fine details in jewelry design</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Natural Language Processing</h3>
              <ul>
                <li>Understanding customer intent in search queries</li>
                <li>Mapping customer terminology to product attributes</li>
                <li>Enabling conversational search experiences</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Recommendation Engines</h3>
              <ul>
                <li>Collaborative filtering to identify patterns in customer preferences</li>
                <li>Content-based recommendations using product attributes</li>
                <li>Hybrid approaches combining multiple recommendation strategies</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Augmented Reality</h3>
              <ul>
                <li>Virtual try-on capabilities for visualizing jewelry on the customer</li>
                <li>3D rendering of jewelry pieces from multiple angles</li>
                <li>Integration with mobile and desktop cameras</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Benefits for Jewelry Retailers</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Increased Conversion Rates</h3>
              <p>
                Visual search users convert at rates up to 689.6% higher than traditional search users, significantly improving sales performance.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Higher Average Order Value</h3>
              <p>
                AI-powered recommendations and cross-selling capabilities can increase average order value by 15-30%.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Enhanced Customer Experience</h3>
              <p>
                Intuitive search and discovery tools reduce friction and create more engaging shopping experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
