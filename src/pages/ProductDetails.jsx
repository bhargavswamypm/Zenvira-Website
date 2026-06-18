import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="py-20">

        <div className="container-custom">

          <div className="grid md:grid-cols-2 gap-12">

            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl shadow-lg"
            />

            <div>

              <h1 className="text-5xl font-bold text-[#0D3B2E]">
                {product.name}
              </h1>

              <p className="mt-4 text-lg text-gray-600">
                Origin: {product.region}
              </p>

              <p className="mt-8 text-gray-700">
                {product.description}
              </p>

              <div className="mt-10">

                <h2 className="text-2xl font-bold">
                  Available Pack Sizes
                </h2>

                <ul className="mt-4 space-y-2">
                  <li>100g</li>
                  <li>200g</li>
                  <li>500g</li>
                  <li>1kg</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}