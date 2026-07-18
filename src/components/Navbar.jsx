import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Specifications", path: "/specifications" },
    { label: "Partner With Us", path: "/partner" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
   <nav className="sticky top-0 z-50 bg-[#051632] border-b border-[#C79B35]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo Section - LARGER */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center group"
          >
            <div className="relative">
              <img
                src="/logo-Photoroom.png"
                alt="Zenvira"
                className="h-24 w-auto transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#C79B35] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-8">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-3 py-2 text-base font-semibold transition-all duration-300 group"
              >
                {/* Main text */}
                <span
                  className={`transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#C79B35] text-lg"
                      : "text-white group-hover:text-[#C79B35]"
                  }`}
                >
                  {item.label}
                </span>

                {/* Bottom accent bar */}
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#C79B35] via-[#D4AF85] to-transparent rounded-full transition-all duration-300 ${
                    isActive(item.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Glow effect on hover */}
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-[#C79B35]/5"
                      : "bg-transparent group-hover:bg-[#C79B35]/8"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <a
              href="/contact"
              className="relative px-8 py-3 rounded-xl font-bold text-base text-white
                bg-gradient-to-r from-[#C79B35] to-[#B88A2E]
                transition-all duration-300 ease-out
                hover:shadow-2xl hover:shadow-[#C79B35]/40 hover:-translate-y-1
                hover:from-[#D4AF85] hover:to-[#C79B35]
                active:translate-y-0 active:shadow-lg
                overflow-hidden group
                border-2 border-[#C79B35]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Shine effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                -translate-x-full group-hover:translate-x-full transition-transform duration-500"
              />

              {/* Animated background glow */}
              <span
                className="absolute -inset-1 bg-gradient-to-r from-[#C79B35] to-[#B88A2E] rounded-xl
                opacity-0 group-hover:opacity-40 group-hover:blur-lg transition-all duration-300 -z-10"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl transition-all duration-300 
              hover:bg-[#EAD7A1]/30 active:bg-[#EAD7A1]/50"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-7 flex flex-col justify-center gap-1.5">
              <span
                className={`h-1 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`h-1 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-1 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 bg-[#051632] border-t border-[#C79B35]/30 animate-in fade-in slide-in-from-top duration-300">
            <div className="space-y-3 pt-6">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group
                    ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-[#C79B35]/20 to-[#C79B35]/5 text-[#C79B35] border-l-4 border-[#C79B35] pl-4"
                        : "text-white hover:bg-[#EAD7A1]/15"
                    }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.path) && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-[#C79B35] to-transparent" />
                  )}
                </Link>
              ))}

              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-6 px-5 py-4 rounded-xl 
                  bg-gradient-to-r from-[#C79B35] to-[#B88A2E]
                  text-white font-bold text-center
                  transition-all duration-300 
                  hover:shadow-xl hover:shadow-[#C79B35]/40 hover:-translate-y-1
                  active:translate-y-0
                  flex items-center justify-center gap-2"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
