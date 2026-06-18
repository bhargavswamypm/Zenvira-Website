export default function Marketplace() {
  const marketplaces = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
          className: "mt-7",
    },
    {
      name: "Flipkart",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png",
    },
    {
      name: "JioMart",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/54/JioMart_logo.svg",
    },
    {
      name: "BigBasket",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/BigBasket_Logo.png",
    },
  ];

  return (
    <section className="bg-white py-12 border-y border-[#EAD7A1]">
      <div className="container-custom">

        <h3 className="text-center text-2xl font-bold text-[#0D3B2E]">
          Launching Soon Across
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center mt-10">

          {marketplaces.map((item) => (
            <div
              key={item.name}
              className="flex justify-center"
            >
<img
  src={item.logo}
  alt={item.name}
  className={`h-12 object-contain ${item.className}`}
/>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}