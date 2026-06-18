import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-[#FAF8F3]">

        <div className="container-custom">

          <h1 className="text-center text-5xl font-bold text-[#0D3B2E]">
            About Zenvira
          </h1>

          <p className="text-center mt-6 max-w-4xl mx-auto text-lg text-gray-600">
            Zenvira is committed to bringing the finest Indian spices
            directly from their regions of origin to homes and businesses
            across the country.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-20">

            <div>
              <img
                src="/images/about/about.png"
                alt="About Zenvira"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#0D3B2E]">
                Purity Close To Nature
              </h2>

              <p className="mt-6 text-gray-700 leading-8">
                We work directly with farmers and trusted sourcing partners
                to ensure every spice maintains its natural aroma,
                flavor and nutritional value.
              </p>

              <p className="mt-6 text-gray-700 leading-8">
                Our mission is to provide authentic regional spices
                while maintaining the highest standards of quality,
                hygiene and sustainability.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}