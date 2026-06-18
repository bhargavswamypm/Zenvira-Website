import { Link } from "react-router-dom";

export default function PartnerCTA() {
  return (
    <section className="py-24 bg-[#C79B35]">

      <div className="container-custom text-center">

        <h2 className="text-5xl font-bold text-white">
          Become A Zenvira Partner
        </h2>

        <p className="mt-6 text-white text-lg">
          Retailers, distributors and wholesalers
          are welcome to partner with us.
        </p>

        <Link to="/partner">

          <button
            className="mt-8 bg-white text-[#0D3B2E]
            px-8 py-4 rounded-xl font-semibold"
          >
            Partner With Us
          </button>

        </Link>

      </div>

    </section>
  );
}