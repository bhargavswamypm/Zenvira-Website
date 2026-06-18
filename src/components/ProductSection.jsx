const products = [
  {
    name: "Lakadong Turmeric",
    region: "Meghalaya",
    image: "/images/products/lakadong-pack.png"
  },
  {
    name: "Byadagi Chilli",
    region: "Karnataka",
    image: "/images/products/byadagi-pack.png"
  },
  {
    name: "Guntur Chilli",
    region: "Andhra Pradesh",
    image: "/images/products/guntur-pack.png"
  },
  {
    name: "Black Pepper",
    region: "Kerala",
    image: "/images/products/pepper-pack.png"
  }
];

export default function ProductSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">

        <h2 className="text-5xl text-center font-bold text-[#0D3B2E]">
          Premium Products
        </h2>

        <p className="text-center mt-4 text-gray-600">
          Carefully sourced from India's finest regions
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {products.map((product) => (
            <div
              key={product.name}
              className="shadow-lg rounded-2xl overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {product.region}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}