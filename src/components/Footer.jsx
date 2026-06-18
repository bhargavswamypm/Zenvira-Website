import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D3B2E] text-white mt-20">

      <div className="container-custom py-16">

        <img
          src="/logo.png"
          alt="logo"
          className="h-24 mb-8 bg-white p-2 rounded"
        />

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-bold mb-4">
              Address
            </h3>

            <p className="flex gap-2">
              <FaMapMarkerAlt />
              38, 5th Cross,
              Royal Residency Layout,
              BTM Layout 4th Stage,
              Bangalore - 560076
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p className="flex gap-2 mb-3">
              <FaPhoneAlt />
              +91 74117 02559
            </p>

            <p className="flex gap-2">
              <FaEnvelope />
              support@smvspices.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Zenvira
            </h3>

            <p>
              Premium Indian spices sourced directly
              from the finest regions across India.
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}