import { create } from 'zustand'
import API from '../api/axios'

const useProductStore = create((set) => ({
  products: [],
  product: null,
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    try {
      set({ isLoading: true, error: null });

      const response = await API.get('/products');

      set({
        products: response.data.product,
        isLoading: false
      });
    } catch (error) {
      console.error(
        'Fetch products failed:',
        error.response?.data || error.message
      );

      set({
        error: error.response?.data?.message || error.message,
        isLoading: false
      });
    }
  },

  fetchProductById: async (id) => {
    try {
      set({ isLoading: true, error: null, product: null })
      const response = await API.get(`/products/${id}`);
      set({
        product: response.data,
        isLoading: false
      });
      return response.data;
    } catch (error) {
      set({
        product: null,
        isLoading: false,
        error: error.response?.data?.message
      });
      return null;
    }
  }
}));

export default useProductStore;
