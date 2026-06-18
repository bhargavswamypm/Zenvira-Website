import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Specifications() {
  return (
    <>
      <Navbar />

      <section className="py-20">

        <div className="container-custom">

          <h1 className="text-center text-5xl font-bold text-[#0D3B2E]">
            Product Specifications
          </h1>

          <div className="overflow-x-auto mt-16">

            <table className="w-full border">

              <thead className="bg-[#0D3B2E] text-white">

                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Origin</th>
                  <th className="p-4">Pack Sizes</th>
                  <th className="p-4">Highlights</th>
                </tr>

              </thead>

              <tbody>

                <tr className="border">
                  <td className="p-4">Lakadong Turmeric</td>
                  <td className="p-4">Meghalaya</td>
                  <td className="p-4">100g, 200g, 500g, 1kg</td>
                  <td className="p-4">High Curcumin</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Byadagi Chilli</td>
                  <td className="p-4">Karnataka</td>
                  <td className="p-4">100g, 200g, 500g, 1kg</td>
                  <td className="p-4">Deep Red Colour</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Guntur Chilli</td>
                  <td className="p-4">Andhra Pradesh</td>
                  <td className="p-4">100g, 200g, 500g, 1kg</td>
                  <td className="p-4">Strong Flavor</td>
                </tr>

                <tr className="border">
                  <td className="p-4">Black Pepper</td>
                  <td className="p-4">Kerala</td>
                  <td className="p-4">100g, 200g, 500g, 1kg</td>
                  <td className="p-4">Rich Piperine</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}