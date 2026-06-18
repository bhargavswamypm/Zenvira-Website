import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Partner() {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-[#FAF8F3] min-h-screen">

        <div className="container-custom">

          <h1 className="text-5xl font-bold text-center text-[#0D3B2E]">
            Partner With Zenvira
          </h1>

          <p className="text-center mt-4 text-gray-600">
            Join our growing network of retailers,
            distributors and wholesalers.
          </p>

          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dg500000CVThx"
            method="POST"
            className="max-w-3xl mx-auto mt-12 bg-white p-10 rounded-2xl shadow-lg"
          >
            <input
              type="hidden"
              name="oid"
              value="00Dg500000CVThx"
            />

            <input
              type="hidden"
              name="retURL"
              value="https://smvspices.com"
            />

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="first_name"
                placeholder="First Name"
                className="border p-4 rounded-lg"
              />

              <input
                name="last_name"
                placeholder="Last Name"
                className="border p-4 rounded-lg"
              />

              <input
                name="email"
                placeholder="Email"
                className="border p-4 rounded-lg"
              />

              <input
                name="phone"
                placeholder="Phone"
                className="border p-4 rounded-lg"
              />

              <input
                name="company"
                placeholder="Company"
                className="border p-4 rounded-lg"
              />

              <input
                name="city"
                placeholder="City"
                className="border p-4 rounded-lg"
              />

            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-[#0D3B2E] text-white py-4 rounded-lg"
            >
              Submit Inquiry
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}