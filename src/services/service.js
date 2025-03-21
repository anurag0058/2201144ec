import axios from 'axios';

// Create an axios instance with common configuration
const api = axios.create({
  baseURL: 'https://your-api-endpoint.com',  // ✅ Replace with your backend URL
  timeout: 10000,                            // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    // Add Authorization header if required:
    // 'Authorization': `Bearer YOUR_API_TOKEN`
  }
});

export default api;

// ========================
// API Functions
// ========================

// Get top users by post count
export const fetchTopUsers = async () => {
  try {
    const response = await api.get('/users/top');   
    return response.data;
  } catch (error) {
    console.error('Error fetching top users:', error);
    throw error;
  }
};

// Get trending posts by comment count
export const fetchTrendingPosts = async () => {
  try {
    const response = await api.get('/posts/trending');  
    return response.data;
  } catch (error) {
    console.error('Error fetching trending posts:', error);
    throw error;
  }
};

// Get real-time feed
export const fetchRealTimeFeed = async () => {
  try {
    const response = await api.get('/feed');  
    return response.data;
  } catch (error) {
    console.error('Error fetching real-time feed:', error);
    throw error;
  }
};
