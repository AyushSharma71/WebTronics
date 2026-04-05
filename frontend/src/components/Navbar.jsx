import { Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import useCartStore from '../store/cartStore'

function Navbar() {
  const { user, logout } = useAuthStore();
  const { getItemCount } = useCartStore();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            Webtronics
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/products" className="hover:text-indigo-200 text-lg">
              Products
            </Link>

            <Link to="/cart" className="hover:text-indigo-200 relative text-lg">
              Cart
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/orders" className="hover:text-indigo-200 text-lg">
                  Orders
                </Link>
                <span className="text-indigo-200">Hello, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-indigo-700 px-4 py-2 rounded hover:bg-indigo-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-indigo-200 text-lg">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
