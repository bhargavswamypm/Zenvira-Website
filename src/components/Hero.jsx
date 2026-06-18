import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[700px] flex items-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b') center/cover"
      }}
    >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-white text-6xl font-bold max-w-3xl">

            Earth's Finest Spices

          </h1>

          <h2 className="text-[#C79B35] text-5xl mt-4">
            Purely Sourced.
          </h2>

          <h2 className="text-white text-5xl mt-2">
            Naturally Powerful.
          </h2>

          <p className="text-white mt-6 max-w-xl text-lg">
            Bringing purity, authenticity and
            tradition from India's finest spice
            regions directly to your kitchen.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-[#C79B35] px-8 py-4 rounded-lg">
              Explore Products
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-lg">
              Partner With Us
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}