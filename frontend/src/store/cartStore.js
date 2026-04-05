import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items;
    const existingItem = items.find(item => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
      set({ items: items });
    } else {
      items.push({ ...product, quantity: 1 });
      set({ items: items });
    }
  },

  removeFromCart: (productId) => {
    const items = get().items;
    const index = items.findIndex(item => item._id === productId);
    if (index > -1) {
      items.splice(index, 1);
    }
    set({ items: items });
  },

  updateQuantity: (productId, quantity) => {
    const items = get().items;
    const item = items.find(item => item._id === productId);
    if (item) {
      item.quantity = quantity;
    }
    set({ items: items });
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));

export default useCartStore;
