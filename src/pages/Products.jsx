import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-[#FAF8F3]">

        <div className="container-custom">

          <h1 className="text-center text-5xl font-bold text-[#0D3B2E]">
            Our Premium Products
          </h1>

          <p className="text-center text-gray-600 mt-4">
            Sourced from India's finest spice regions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}