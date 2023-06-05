import { Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

function InstrumentCard({instrument}) {
    const image = `localhost:1433/data/guitars/${instrument.imagePath}`
    return (
        <Card>
            <Link to={`details/${instrument.id}`}>
                <CardImg src={image} alt="instrument_photo"/>
                <CardHeader>{instrument.name}</CardHeader>
                <div>${instrument.price}</div>
            </Link>
        </Card>
    )
}
export default InstrumentCard;