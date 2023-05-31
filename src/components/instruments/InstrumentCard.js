import { Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function InstrumentCard({instrument}) {


    return (
        <Card>
            <CardImg src={instrument.imagePath} alt="instrument_photo"/>
            <CardHeader>{instrument.name}</CardHeader>
            <div>${instrument.price}</div>
        </Card>
    )
}
export default InstrumentCard;