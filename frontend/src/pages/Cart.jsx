import { Link,useNavigate} from 'react-router-dom'
import useCartStore from '../store/cartStore'
import CartItem from '../components/CartItem'
import { useEffect } from 'react';
import useAuthStore from '../store/authStore';

function Cart() {
  const { items, getTotal } = useCartStore();
  const {user} =useAuthStore();
  const navigate =useNavigate();
  
  useEffect(()=>{
    if(!user){
      navigate('/login',{replace:true});
    }
  },[user,navigate]);
  
  if(!user) return null;

  if (items.length === 0) { 
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Looks like you haven't added any items yet.</p>
        <Link
          to="/products"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-4">
          {items.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg text-center hover:bg-indigo-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
