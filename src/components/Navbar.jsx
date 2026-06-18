import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#0D3B2E] text-white text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-5">
            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              +91 74117 02559
            </span>

            <span className="flex items-center gap-2">
              <FaEnvelope />
              support@smvspices.com
            </span>
          </div>

          <div>
            Purity Close to Nature
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm">
        <div className="container-custom flex justify-between items-center py-4">

          <Link to="/">
            <img
              src="/logo.png"
              alt="Zenvira"
              className="h-20"
            />
          </Link>

          <div className="flex gap-8 font-medium text-[#0D3B2E]">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/products">Products</Link>

            <Link to="/specifications">
              Specifications
            </Link>

            <Link to="/partner">
              Partner With Us
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}