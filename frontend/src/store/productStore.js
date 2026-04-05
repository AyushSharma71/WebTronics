import { create } from 'zustand'
import API from '../api/axios'

const useProductStore = create((set) => ({
  products: [],
  product: null,
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true });
    const response = await API.get('/products');
    set({ products: response.data, isLoading: false });
  },

  fetchProductById: async (id) => {
    set({ isLoading: true });
    const response = await API.get(`/products/${id}`);
    set({ product: response.data, isLoading: false });
  }
}));

export default useProductStore;
