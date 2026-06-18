import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Specifications", path: "/specifications" },
    { label: "Partner With Us", path: "/partner" },
    { label: "Contact", path: "/contact" },
  ];

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#C79B35] font-semibold"
      : "text-[#0D3B2E] hover:text-[#C79B35] transition duration-300";
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0D3B2E] text-white text-sm">
        <div className="container-custom py-3 flex flex-col md:flex-row justify-between items-center gap-2">

          <div className="flex flex-col md:flex-row gap-4">

            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              +91 74117 02559
            </span>

            <span className="flex items-center gap-2">
              <FaEnvelope />
              support@smvspices.com
            </span>

          </div>

          <div className="text-center">
            Purity Close To Nature
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">

        <div className="container-custom flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/">
            <img
              src="/logo.png"
              alt="Zenvira"
              className="h-20 md:h-24"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkClass(link.path)}
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-[#0D3B2E]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow-lg">

            <div className="flex flex-col p-6 gap-5">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={getLinkClass(link.path)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>
        )}

      </nav>
    </>
  );
}