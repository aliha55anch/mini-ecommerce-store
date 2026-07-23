import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { AlertTriangle, RefreshCw } from "lucide-react";
import ProductCard from "./ProductCard";

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="flex items-center justify-between">
          <div className="h-5 bg-gray-200 rounded w-16" />
          <div className="h-9 bg-gray-200 rounded-lg w-20" />
        </div>
      </div>
    </div>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status, error, selectedCategory } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  if (status === "loading") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Something went wrong
        </h3>
        <p className="text-sm text-gray-500 mb-4 max-w-md">{error}</p>
        <button
          onClick={() => dispatch(fetchProducts())}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          Retry
        </button>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
