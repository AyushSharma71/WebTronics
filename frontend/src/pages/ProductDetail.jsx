import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useProductStore from '../store/productStore'
import useCartStore from '../store/cartStore'
import useAuthStore from '../store/authStore'

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isLoading, fetchProductById } = useProductStore();
  const { addToCart } = useCartStore();
  const {user} = useAuthStore();

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(product);
    navigate('/cart');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Product not found
        </h1>
        <button
          onClick={() => navigate('/products')}
          className="text-indigo-600 underline"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-gray-600 dark:text-gray-300 ml-2">{product.rating} ({product.numReviews} reviews)</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-indigo-600 mb-6">${product.price}</p>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {product.stock > 0 ? (
              <span className="text-green-600">In Stock ({product.stock} available)</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
