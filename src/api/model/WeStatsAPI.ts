class WeStatsAPI {
    private baseURL: string;
  
    constructor(baseURL: string) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint: string): Promise<any> {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  
    // Добавьте другие методы, такие как post, put, delete, в зависимости от вашего API
  }
  
  const api = new WeStatsAPI('http://localhost:8000');
  export default api;
  