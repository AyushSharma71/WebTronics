import { Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import useCartStore from '../store/cartStore'
import { useEffect, useState } from 'react';

function Navbar() {
  const { user, logout } = useAuthStore();
  const { getItemCount } = useCartStore();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            Webtronics
          </Link>

          <div className='flex items-center space-x-8'>
            <button
              type="button"
              onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
              className="rounded p-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v2" />
                <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
                <path d="M16 12a4 4 0 0 0-4-4" />
                <path d="m19 5-1.256 1.256" />
                <path d="M20 12h2" />
              </svg>
            </button>

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
      </div>
    </nav>
  )
}

export default Navbar
