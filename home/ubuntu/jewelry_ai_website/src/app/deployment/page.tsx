import MainLayout from "@/components/MainLayout";

export default function Deployment() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1>Deployment Scenarios and Use Cases</h1>
        
        <section className="card">
          <h2>Common Deployment Scenarios</h2>
          <p>
            Vertical search AI solutions in the jewelry industry are typically deployed in several ways, each offering unique advantages for retailers and customers.
          </p>
          
          <div className="mt-6 space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">E-commerce Website Integration</h3>
              <ul>
                <li>Visual search functionality embedded directly into jewelry e-commerce platforms</li>
                <li>Search bar with camera/image upload icon</li>
                <li>"Shop Similar" buttons on product detail pages</li>
                <li>"Discovery Button" on product images for finding similar items</li>
                <li>Results filtering capabilities to refine visual search results</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Mobile App Implementation</h3>
              <ul>
                <li>Dedicated visual search feature in jewelry retailer mobile apps</li>
                <li>Camera integration for taking photos of desired jewelry</li>
                <li>Gallery access for uploading existing images</li>
                <li>Real-time visual search processing</li>
                <li>Mobile-optimized results display</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">In-Store Kiosk/Tablet Deployment</h3>
              <ul>
                <li>Touchscreen devices in physical jewelry stores</li>
                <li>Allows customers or sales associates to search for items not on display</li>
                <li>Inventory integration to check availability</li>
                <li>Option to order items not physically in store</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Social Media Integration</h3>
              <ul>
                <li>Connection between social platforms and jewelry retailer systems</li>
                <li>"Shop this look" functionality from social media posts</li>
                <li>Direct linking from social posts to similar products</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Specific Use Cases</h2>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Customer-Initiated Discovery</h3>
              <p className="mb-3">
                Customer sees jewelry they like (online, in a magazine, or in person) and wants to find something similar.
              </p>
              <ul>
                <li>Upload image to retailer's visual search tool</li>
                <li>Find similar items within their price range and preferred specifications</li>
                <li>Converts inspiration into actual purchases, reduces search friction</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Upselling and Cross-Selling</h3>
              <p className="mb-3">
                Customer viewing a specific jewelry item on a product page.
              </p>
              <ul>
                <li>"Shop Similar" and "Shop the Look" recommendations</li>
                <li>Customer discovers complementary items or alternative options</li>
                <li>Increases average order value, encourages additional purchases</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Inventory Exploration</h3>
              <p className="mb-3">
                Customer has a general style in mind but can't articulate it in text.
              </p>
              <ul>
                <li>Visual browsing interfaces with style clustering</li>
                <li>Customer discovers items matching their aesthetic preferences</li>
                <li>Helps customers find products they wouldn't have found through text search</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Trend Identification</h3>
              <p className="mb-3">
                Retailer analyzing which visual elements drive the most engagement.
              </p>
              <ul>
                <li>Backend analytics of visual search patterns</li>
                <li>Identification of emerging style trends and customer preferences</li>
                <li>Informs inventory decisions and marketing strategies</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Competitive Product Matching</h3>
              <p className="mb-3">
                Customer interested in a competitor's product.
              </p>
              <ul>
                <li>Visual search to find similar items in the retailer's inventory</li>
                <li>Customer finds comparable products, potentially at better prices</li>
                <li>Converts competitor's marketing into own sales opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Custom Design Inspiration</h3>
              <p className="mb-3">
                Customer seeking custom jewelry design.
              </p>
              <ul>
                <li>Visual search to find starting points for customization</li>
                <li>Customer identifies base designs that can be modified</li>
                <li>Streamlines the custom design process, provides visual reference points</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="card">
          <h2>Implementation Considerations</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Technical Integration</h3>
              <p>
                Consider platform compatibility, API availability, and development resources required for successful implementation.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">User Experience Design</h3>
              <p>
                Ensure intuitive interfaces with clear visual cues for search functionality and seamless results presentation.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">Data Quality</h3>
              <p>
                High-quality product images, comprehensive attribute data, and regular catalog updates are essential for optimal performance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
