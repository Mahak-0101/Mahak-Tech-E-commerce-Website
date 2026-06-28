/**
 * PRODUCT MARKETPLACE SECTION (Section 10.4)
 * MahakTech's own SaaS products as proof of self-application
 */

const PRODUCTS = [
  {
    id: 'product-1',
    name: 'Product Name 1',
    description: 'Description of the product',
  },
  {
    id: 'product-2',
    name: 'Product Name 2',
    description: 'Description of the product',
  },
  {
    id: 'product-3',
    name: 'Product Name 3',
    description: 'Description of the product',
  },
];

export default function ProductMarketplaceSection() {
  return (
    <section id="products" className="w-full bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="caption text-cyan-signal mb-4">OUR PRODUCTS</p>
          <h2 className="h1 text-obsidian-ink">Tools We Build</h2>
          <p className="text-lg text-slate-mist max-w-2xl mx-auto mt-6">
            We use what we build. Our products power enterprise operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="group p-8 rounded-2xl bg-panel-fog border border-hairline hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-32 bg-gradient-to-br from-indigo-electric/20 to-cyan-signal/20 rounded-lg mb-6 group-hover:scale-105 transition-transform" />
              <h3 className="h3 text-obsidian-ink mb-3 group-hover:text-indigo-electric transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-mist text-sm">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
