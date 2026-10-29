import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import useAuthStore from './store/authStore';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'

function App() {
  const checkAuth = useAuthStore((state)=>state.checkAuth)
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <main>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
