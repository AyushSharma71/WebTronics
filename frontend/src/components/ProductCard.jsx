import { Link,useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import useAuthStore from '../store/authStore';


function ProductCard({ product }) {
  const { addToCart } = useCartStore();
  const {user} = useAuthStore();
  const navigate = useNavigate();


  const handleAddToCart = (e) => {
    e.preventDefault();
    if(!user){
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <Link to={`/product/${product._id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 h-12 overflow-hidden">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-indigo-600">${product.price}</span>
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-gray-600 dark:text-gray-300 ml-1">{product.rating}</span>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
