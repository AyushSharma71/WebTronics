import useCartStore from '../store/cartStore'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-indigo-600 font-bold">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item._id, item.quantity - 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item._id, item.quantity + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeFromCart(item._id)}
        className="text-red-500 hover:text-red-700 ml-4"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
