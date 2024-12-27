import axios from 'axios';

// Replace with your server's base URL
const BASE_URL = 'http://localhost:5000';

// Axios instance for API calls
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login API call
export const login = async ({ email, password }) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || 'Login failed' };
  }
};

// Signup API call
export const signup = async ({ name, email, password }) => {
  try {
    const response = await api.post('/signup', { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Signup API Error:', error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || 'Signup failed' };
  }
};

export default api;
