import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import MissionSection from "../components/MissionSection";
import PartnerCTA from "../components/PartnerCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-20">
        <div className="container-custom">

          <h2 className="text-center text-5xl font-bold text-[#0D3B2E]">
            Why Choose Zenvira
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="shadow-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Direct From Source
              </h3>

              <p>
                Sourced directly from premium
                spice-growing regions of India.
              </p>
            </div>

            <div className="shadow-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Quality Assured
              </h3>

              <p>
                Carefully selected and
                hygienically packed.
              </p>
            </div>

            <div className="shadow-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Natural Purity
              </h3>

              <p>
                No artificial colors,
                preservatives or additives.
              </p>
            </div>

          </div>

        </div>
      </section>

<ProductSection />

<MissionSection />

<PartnerCTA />

      <Footer />
    </>
  );
}