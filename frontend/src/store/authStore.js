import { create } from 'zustand'
import API from '../api/axios'

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    const response = await API.post('/auth/login', { email, password });
    const { token, ...userData } = response.data;
    localStorage.setItem('token', token);
    set({ user: userData, token, isLoading: false });
    return response.data;
  },

  register: async (name, email, password) => {
    set({ isLoading: true, error: null });
    const response = await API.post('/auth/register', 
      { name, email, password }
    );
    const { token, ...userData } = response.data;
    localStorage.setItem('token', token);
    set({ user: userData, token, isLoading: false });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },

  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      set({user:null,token:null});
      return;
    }
    try{
      const response = await API.get('/auth/profile');
      set({ user: response.data, token });
    }catch(error){
      console.error(
        'Authentication restore failed',
        error.response?.status,
        error.message
      );

      localStorage.removeItem('token');
      set({user:null,token:null});
    }
  }
}));

export default useAuthStore;
