import {
  FaLeaf,
  FaAward,
  FaSeedling,
  FaGlobeAsia,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <FaLeaf />,
      title: "Natural Purity",
      desc: "No artificial colors or preservatives.",
    },
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "Hand-selected and quality checked.",
    },
    {
      icon: <FaSeedling />,
      title: "Direct Sourcing",
      desc: "From India's best spice regions.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Authentic Origins",
      desc: "Region-specific premium produce.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="container-custom">

        <h2 className="text-center text-5xl font-bold text-[#0D3B2E]">
          Why Choose Zenvira
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              p-8
              rounded-2xl
              shadow-lg
              text-center
              hover:-translate-y-2
              transition"
            >

              <div className="text-4xl text-[#C79B35] flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}