// Get top users by post count
export const fetchTopUsers = async () => {
    try {
      const response = await api.get('/users/top');   // Replace with actual endpoint
      return response.data;
    } catch (error) {
      console.error('Error fetching top users:', error);
      throw error;
    }
  };
  
  // Get trending posts by comment count
  export const fetchTrendingPosts = async () => {
    try {
      const response = await api.get('/posts/trending');  // Replace with actual endpoint
      return response.data;
    } catch (error) {
      console.error('Error fetching trending posts:', error);
      throw error;
    }
  };
  
  // Get real-time feed
  export const fetchRealTimeFeed = async () => {
    try {
      const response = await api.get('/feed');  // Replace with actual endpoint
      return response.data;
    } catch (error) {
      console.error('Error fetching real-time feed:', error);
      throw error;
    }
  };
  