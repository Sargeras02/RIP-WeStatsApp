import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import './MeteoStationCard.css'

interface MeteoStation {
    name: string
    location: string
    imageUrl: string
    description: string
    status: boolean
    // Добавьте другие необходимые поля
}

interface Props {
    station: MeteoStation
    // Добавьте другие необходимые пропсы
}

const MeteoStationCard: FC<Props> = ({ station }) => (
    <Card className="card">
        <Card.Img className="cardImage" variant="top" src={station.imageUrl} height={100} width={100}  />
        <Card.Body>                
            <div className="textStyle">
                <Card.Title>{station.name}</Card.Title>
            </div>
            <div className="textStyle">
                <Card.Text>
                    {station.location}
                </Card.Text>
            </div>
            {/* Добавьте отображение других данных о метеостанции */}
            <Button className="cardButton" variant="primary">Подробнее</Button>
        </Card.Body>
    </Card>
)

export default MeteoStationCard;
