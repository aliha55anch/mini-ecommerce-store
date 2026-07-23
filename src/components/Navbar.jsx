import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart, LogIn, LogOut } from "lucide-react";
import useAuth from "../context/useAuth";
import { setCategory } from "../redux/slices/productsSlice";

const CATEGORIES = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

export default function Navbar({ onCartClick }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated, login, logout } = useAuth();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">ShopWave</span>
          </div>

          <nav className="hidden md:flex items-center gap-1 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setCategory(cat))}
                className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <span className="hidden sm:inline text-sm text-gray-600">
                Hello, {user.name.split(" ")[0]}
              </span>
            )}

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalQuantity > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center h-5 min-w-5 px-1 text-xs font-bold text-white bg-indigo-600 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </button>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            ) : (
              <button
                onClick={login}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-1 pb-2 overflow-x-auto -mx-4 px-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
              className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
