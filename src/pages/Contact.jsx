import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-20 min-h-screen">

        <div className="container-custom">

          <h1 className="text-5xl font-bold text-center text-[#0D3B2E]">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-16">

            <div>

              <h2 className="text-2xl font-bold">
                Zenvira
              </h2>

              <p className="mt-4">
                38, 5th Cross,
                Royal Residency Layout,
                BTM Layout 4th Stage,
                Bangalore - 560076
              </p>

              <p className="mt-4">
                +91 74117 02559
              </p>

              <p className="mt-4">
                support@smvspices.com
              </p>

            </div>

            <div>

              <iframe
                title="map"
                className="w-full h-[400px] rounded-xl"
                src="https://maps.google.com/maps?q=BTM%20Layout%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}