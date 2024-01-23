import { FC, useState } from 'react';
import { Card, Col, Row, Button, Spinner } from 'react-bootstrap';
import './MeteoPage.css';

interface WeatherStation {
    station_id: number
    name: string
    location: string
    opendate: string
    description: string
    status: boolean
    image_url: string | null
}

interface WeatherStationResult {
    resultCount: number;
    stations: WeatherStation[];
}

const getStationById = async (stationId = 1): Promise<WeatherStationResult> => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/stations/${stationId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const stationData = await response.json();
        const weatherStationResult: WeatherStationResult = {
            resultCount: 1,
            stations: [stationData],
        };
        console.log(weatherStationResult)
        return weatherStationResult;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return { resultCount: 0, stations: [] };
    }
};

const WeatherStationsPage: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [stations, setStations] = useState<WeatherStation[]>([]);

    const handleSearch = async () => {
        await setLoading(true);
        const { stations: foundStations } = await getStationById(Number(searchValue));
        await setStations(foundStations);
        await setLoading(false);
    };

    return (
        <div className={`container ${loading && 'containerLoading'}`}>
            {loading && <div className="loadingBg"><Spinner animation="border" /></div>}

            <div className="inputField">
                <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <Button disabled={loading} onClick={handleSearch}>Искать</Button>
            </div>

            {!stations.length && <div>
                <h1>К сожалению, пока ничего не найдено :(</h1>
            </div>}

            <Row xs={4} md={4} className="g-4">
                {stations.map((station, index) => (
                    <Col key={index}>
                        <Card className="card">
                            <Card.Body>
                                <div className="textStyle">
                                    <Card.Title>{station.name}</Card.Title>
                                    {/* Другие поля */}
                                </div>
                                <Button className="cardButton" variant="primary">Подробнее</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default WeatherStationsPage;