import { FC, useEffect, useState } from 'react';
import { Col, Row, Button, Spinner } from 'react-bootstrap';

import { api } from '../api';
import { WeatherStation } from '../api/WeStatsApiModel';
import StationInfoCard from '../components/StationInfoCard';
import manualStations from '../debugtmp/ManualStations';

const StationsListPage: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [stations, setStations] = useState<WeatherStation[]>([]);

    const fetchStations = async () => {
        try {
          const { data } = await api.stations.stationsList();
          setStations(data);
        } catch (error) {
          console.error('Ошибка при получении станций:', error);
          setStations(manualStations)
        } finally {
          setLoading(false);
        }
      };

    const handleSearch = async () => {
        try {
            const filter = {
                filter: searchValue
              };
          const { data } = await api.stations.stationsList(filter);
          setStations(data);
        } catch (error) {
          console.error('Ошибка при получении станций:', error);
          setStations(manualStations.filter(station => station.name.includes(searchValue)));
        } finally {
          setLoading(false);
        }
    };
    
    useEffect(() => {
        setLoading(true);
        fetchStations();
      }, []);

    return (
        <div className={`container ${loading && 'containerLoading'}`}>
            <div className="inputField d-flex justify-content-center mt-3">
                <input
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    className="form-control me-3"
                    placeholder="Введите значение для поиска"
                />
                <Button disabled={loading} onClick={handleSearch} className="btn btn-primary me-3">
                    Искать
                </Button>
                {loading && <div className="loadingBg"><Spinner animation="border" /></div>}
            </div>
            
            <hr />

            {!stations.length && <div>
                <h1>К сожалению, пока ничего не найдено :(</h1>
            </div>}
            
            <Row xs={4} ms={4} className="g-10">
                {stations.map((station, index) => (
                    <Col key={index}>
                        <StationInfoCard station={station} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default StationsListPage;