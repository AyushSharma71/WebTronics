import { useEffect, useState } from 'react'
import useProductStore from '../store/productStore'
import ProductCard from '../components/ProductCard'

function Products() {
  const { products, isLoading, fetchProducts } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No products found</p>
      )}
    </div>
  )
}

export default Products
