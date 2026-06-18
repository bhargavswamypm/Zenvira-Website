import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#0D3B2E]">
          {product.name}
        </h3>

        <p className="text-gray-500 mt-2">
          {product.region}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        <Link to={`/products/${product.id}`}>

          <button className="mt-6 bg-[#C79B35] text-white px-6 py-3 rounded-lg">
            View Details
          </button>

        </Link>

      </div>

    </div>
  );
}