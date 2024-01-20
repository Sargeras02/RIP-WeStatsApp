import api from './WeStatsAPI';

class StationsService {
    
  async getStationsList(): Promise<any> {
    return api.get(`/stations/`);
  }

  async getStationById(stationId: number): Promise<any> {
    return api.get(`/stations/${stationId}`);
  }

  // Другие методы, связанные с работой со станциями
}

const stationsService = new StationsService();
export default stationsService;