import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#FAF8F3] overflow-hidden">

<div className="container-custom py-12 flex items-center">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-[#C79B35] font-semibold tracking-widest uppercase">
              Premium Indian Spices
            </span>

            <h1 className="mt-4 text-5xl lg:text-7xl font-bold text-[#0D3B2E] leading-tight">

              Purity Close
              <br />
              To Nature

            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-xl leading-8">

              Discover authentic spices sourced directly
              from India's most celebrated spice-growing
              regions. Bringing purity, tradition and
              excellence to every kitchen.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link to="/products">

                <button
                  className="
                  bg-[#0D3B2E]
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-[#08271e]
                  transition"
                >
                  Explore Products
                </button>

              </Link>

              <Link to="/partner">

                <button
                  className="
                  border-2
                  border-[#C79B35]
                  text-[#C79B35]
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-[#C79B35]
                  hover:text-white
                  transition"
                >
                  Partner With Us
                </button>

              </Link>

            </div>

          </motion.div>

        </div>

        {/* Right Image */}
        <div className="hidden lg:flex w-1/2 justify-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src="/images/home/home.png"
              alt="Lakadong Turmeric"
              className="
                w-[450px]
                drop-shadow-2xl
                hover:scale-105
                transition
                duration-500
              "
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}