const regions = [
  {
    name: "Meghalaya",
    product: "Lakadong Turmeric",
    image: "/images/regions/meghalaya.jpg",
  },
  {
    name: "Karnataka",
    product: "Byadagi Chilli",
    image: "/images/regions/karnataka.jpg",
  },
  {
    name: "Andhra Pradesh",
    product: "Guntur Chilli",
    image: "/images/regions/andhra.jpg",
  },
  {
    name: "Kerala",
    product: "Black Pepper",
    image: "/images/regions/kerala.jpg",
  },
];

export default function RegionsSection() {
  return (
    <section className="py-24 bg-[#FAF8F3]">
      <div className="container-custom">

        <h2 className="text-center text-5xl font-bold text-[#0D3B2E]">
          Sourced From India's Finest Regions
        </h2>

        <p className="text-center mt-4 text-gray-600">
          Every spice has a story rooted in its region.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {regions.map((region) => (
            <div
              key={region.name}
              className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition
              duration-300"
            >

              <img
                src={region.image}
                alt={region.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0D3B2E]">
                  {region.name}
                </h3>

                <p className="mt-2 text-[#C79B35] font-semibold">
                  {region.product}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}