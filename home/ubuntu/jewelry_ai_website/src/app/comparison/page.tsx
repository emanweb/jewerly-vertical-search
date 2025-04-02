import MainLayout from "@/components/MainLayout";

export default function Comparison() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1>Differentiation Factors Between Solutions</h1>
        
        <section className="card">
          <h2>Technology Foundation and Approach</h2>
          <p>
            Vertical search AI solutions in the jewelry industry differentiate themselves through their underlying technology approaches and methodologies.
          </p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Visual Recognition Algorithms</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Uses proprietary deep learning algorithms specifically trained on jewelry items with emphasis on fine details like gemstone cuts, metal textures, and setting styles.</li>
                <li><strong>Google Vertex AI Search:</strong> Leverages Google's vast image database and general-purpose visual recognition capabilities, with less jewelry-specific optimization but broader training data.</li>
                <li><strong>H2O.ai:</strong> Focuses on open-source machine learning frameworks that can be customized for jewelry applications, emphasizing transparency and adaptability.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Search Methodology</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Employs a "camera-first" approach, prioritizing image uploads from customers' own photos or screenshots.</li>
                <li><strong>Google Vertex AI Search:</strong> Integrates text and visual search in a hybrid approach, allowing customers to refine visual searches with text parameters.</li>
                <li><strong>Lily AI:</strong> Emphasizes consumer language and vocabulary mapping to product attributes, bridging the gap between how customers describe items and how retailers catalog them.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Data Processing Architecture</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Cloud-based processing optimized for mobile device integration and real-time results.</li>
                <li><strong>H2O.ai:</strong> Offers both cloud and on-premises deployment options, providing flexibility for retailers with different IT infrastructure requirements.</li>
                <li><strong>Google Vertex AI Search:</strong> Fully cloud-based with emphasis on scalability for large catalogs and high query volumes.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>User Experience and Interface Design</h2>
          <p>
            The way users interact with these AI solutions varies significantly between providers, creating important differentiation points.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Search Initiation Methods</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Multiple entry points including camera icon in search bar, "Shop Similar" buttons, and discovery buttons on product images.</li>
                <li><strong>Google Vertex AI Search:</strong> Integrated within existing search functionality with added visual search capabilities.</li>
                <li><strong>Lily AI:</strong> Focuses on enhancing traditional search with better understanding of customer language rather than primarily visual interfaces.</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Results Presentation</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Grid-based visual results with emphasis on similarity scoring and visual matching.</li>
                <li><strong>Google Vertex AI Search:</strong> Combines visual similarity with relevance ranking based on additional factors like popularity and conversion rates.</li>
                <li><strong>Lily AI:</strong> Presents results with explanations of why items were matched, highlighting specific attributes that aligned with the search.</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Mobile Optimization</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Mobile-first design philosophy with streamlined interfaces for smartphone users.</li>
                <li><strong>Google Vertex AI Search:</strong> Responsive design that adapts to different devices but not specifically optimized for mobile-first experiences.</li>
                <li><strong>H2O.ai:</strong> Requires more customization for optimal mobile experiences, focusing primarily on backend capabilities.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Integration Capabilities and Ecosystem</h2>
          <p>
            How these solutions integrate with existing systems and complement other tools creates significant differentiation.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">E-commerce Platform Compatibility</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Offers pre-built integrations with major platforms like Shopify, Magento, and WooCommerce.</li>
                <li><strong>Google Vertex AI Search:</strong> Provides APIs and documentation for custom integration, requiring more development resources.</li>
                <li><strong>H2O.ai:</strong> Requires significant custom development for integration, focusing on providing the AI engine rather than turnkey solutions.</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Complementary Features</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Bundled with recommendation engine, automated product tagging, and inventory insights.</li>
                <li><strong>Lily AI:</strong> Integrated with product attribution enhancement, SEO optimization, and consumer language mapping.</li>
                <li><strong>Google Vertex AI Search:</strong> Part of broader Google Cloud ecosystem, allowing integration with other Google services and analytics.</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Third-party Data Sources</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Integrates with social media platforms for trend identification and inspiration sources.</li>
                <li><strong>Google Vertex AI Search:</strong> Leverages Google's vast data resources for enhanced search capabilities.</li>
                <li><strong>H2O.ai:</strong> Focuses on retailer's own data with less emphasis on external data integration.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Specialization and Industry Focus</h2>
          <p>
            The degree of specialization in the jewelry industry creates important differentiation between solutions.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Jewelry-Specific Optimization</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Highly specialized for jewelry with trained models for recognizing specific gemstones, cuts, settings, and styles.</li>
                <li><strong>Google Vertex AI Search:</strong> General-purpose solution adapted for retail including jewelry, but not exclusively optimized for jewelry attributes.</li>
                <li><strong>Lily AI:</strong> Focuses on retail broadly with some jewelry-specific attribute libraries but serves multiple retail verticals.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Target Market Segment</h3>
              <ul>
                <li><strong>Syte.ai:</strong> Primarily targets mid to high-end jewelry retailers with substantial online catalogs.</li>
                <li><strong>H2O.ai:</strong> Appeals to larger enterprises with data science capabilities and resources for customization.</li>
                <li><strong>Google Vertex AI Search:</strong> Serves a broad range of retailers from small businesses to enterprise operations.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Key Differentiators by Provider</h2>
          <div className="mt-6 space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Syte.ai</h3>
              <ul>
                <li><strong>Primary Differentiator:</strong> Jewelry-specific visual search with highest accuracy for fine details and craftsmanship elements.</li>
                <li><strong>Secondary Differentiator:</strong> End-to-end solution including automated tagging, recommendations, and trend analysis.</li>
                <li><strong>Target Customer:</strong> Mid to high-end jewelry retailers seeking specialized visual search capabilities.</li>
                <li><strong>Unique Selling Proposition:</strong> "The most accurate visual search specifically optimized for fine jewelry details and craftsmanship."</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Google Vertex AI Search for Commerce</h3>
              <ul>
                <li><strong>Primary Differentiator:</strong> Scalability and integration with Google's ecosystem of services and vast data resources.</li>
                <li><strong>Secondary Differentiator:</strong> Transparent, usage-based pricing with no upfront costs.</li>
                <li><strong>Target Customer:</strong> Retailers of all sizes seeking reliable, scalable search functionality.</li>
                <li><strong>Unique Selling Proposition:</strong> "Enterprise-grade search capabilities powered by Google's AI with simple, transparent pricing."</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Lily AI</h3>
              <ul>
                <li><strong>Primary Differentiator:</strong> Consumer language mapping to bridge the gap between customer terminology and product attributes.</li>
                <li><strong>Secondary Differentiator:</strong> Comprehensive retail value chain coverage from product attribution to marketing.</li>
                <li><strong>Target Customer:</strong> Multi-category retailers seeking to improve product discovery across their entire catalog.</li>
                <li><strong>Unique Selling Proposition:</strong> "Translating consumer language into product attributes for more intuitive discovery experiences."</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">H2O.ai</h3>
              <ul>
                <li><strong>Primary Differentiator:</strong> Customizable, open-source foundation allowing for tailored implementations.</li>
                <li><strong>Secondary Differentiator:</strong> Advanced analytics capabilities beyond search, including predictive modeling.</li>
                <li><strong>Target Customer:</strong> Large enterprises with data science resources seeking highly customizable solutions.</li>
                <li><strong>Unique Selling Proposition:</strong> "Enterprise-grade AI platform that can be customized for specific jewelry business needs."</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Emerging Differentiation Trends</h2>
          <p>
            The competitive landscape continues to evolve with several emerging trends creating new differentiation opportunities:
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Ethical Sourcing Integration</h3>
              <p>
                Some providers are beginning to integrate ethical sourcing verification into their visual search capabilities, allowing customers to find jewelry that meets specific sustainability or ethical standards.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Augmented Reality Enhancement</h3>
              <p>
                Providers are increasingly differentiating by the quality of their AR integration, allowing customers to not just find similar items but virtually try them on.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Social Commerce Connection</h3>
              <p>
                The ability to seamlessly connect visual search with social media platforms is becoming a key differentiator, especially for reaching younger jewelry consumers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
