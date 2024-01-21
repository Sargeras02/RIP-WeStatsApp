import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Col, Container, Row, Spinner } from 'react-bootstrap';

import { api } from '../api';
import { WeatherStation } from '../api/WeStatsApiModel';

  // Создание контекста для станции
const StationContext = createContext<Partial<WeatherStation>>({});

const StationInfoPage: React.FC = () => {
    
    const { stationId } = useParams<{ stationId: string }>();
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [station, setStation] = useState<Partial<WeatherStation>>({});
    
    useEffect(() => {
        setLoading(true);
        const getStation = async () => {
            try {
                if (stationId)
                {
                    const response = await api.stations.stationsRead(stationId);
                    setStation(response.data);
                    setLoaded(true);
                }
            } catch (error) {
                console.error('Failed to fetch station data', error);
                setLoaded(false);
            } finally {
                setLoading(false);
            }
        };
    
        getStation();
      }, [stationId]);

    return (
        <div>
            { loading && <div className="loadingBg"><Spinner animation="border" /></div> }
            { !loading && !loaded && <div>
                    <h1>Не удалось загрузить запрашиваемые данные.</h1>
                    <a href={`/RIP-WeStatsApp/stations`} className="btn btn-primary me-3 mt-5">Вернуться</a>
                </div>
            }
            { !loading && loaded && <StationContext.Provider value={station}>
                <Container className="mt-4  ">
                    <Row>
                        <Col md={6}>
                            {station.image_url && <img src={station.image_url} alt="Station" className="img-fluid" />}
                        </Col>
                        <Col md={6}>
                            <h2>{station.name}</h2>
                            <p>{station.description}</p>
                            <p>Местоположение: {station.location}</p>
                            <p>Дата открытия: {new Date(station.open_date!).toLocaleString()}</p>
                            <p>Статус: {station.status ? 'Работает' : 'Не работает'}</p>
                            <div className="d-flex justify-content-center">
                                <a href={`/RIP-WeStatsApp/stations`} className="btn btn-primary me-4">Назад</a>
                                {/* <Button variant="primary">Order Data</Button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StationContext.Provider> }
        </div>
    );
};

export default StationInfoPage;

// Хук для использования контекста в компонентах
export const useStation = () => {
    return useContext(StationContext);
  };