export const fetchTMDbDataMovies = async (type) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
      },
    };
  
    const urlMap = {
      onTheAir: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      airingToday: "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      popular: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      topRated: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      trending: "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
    };
  
    if (!urlMap[type]) {
      throw new Error(`Invalid data type: ${type}`);
    }
  
    try {
      const response = await fetch(urlMap[type], options);
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch data");
    }
  };
  
  
  
  
  
  
  