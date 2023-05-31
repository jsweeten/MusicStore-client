import Carousel from 'react-bootstrap/Carousel';
import placeholder from "../assets/Icon-Placeholder-1.png";
import drum_floor from "../assets/home-carousel/drum-floor.jpg";
import acoustic_room from "../assets/home-carousel/acoustic-room.jpg";
import amp_display from "../assets/home-carousel/amp-display.jpg";
import InstrumentCard from './instruments/InstrumentCard';
import { getAllGuitars } from '../modules/guitarManager';
import { useState, useEffect } from "react";
import { CardGroup } from 'react-bootstrap';

function Home() {
    const [ guitars, setGuitars ] = useState([]);

    const getGuitars = () => {
        getAllGuitars().then(data => setGuitars(data))
    }

    useEffect(() => {
        getGuitars()
    }, []);
    
    return (
        <>    
            <header className="text-center">
                <h1>Jay's Music</h1>
                <h2>The Best Music Store in East Nashville!</h2>
            </header>
            <Carousel>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={amp_display}
                alt="Guitar and Bass Amplifiers"
                />
                <Carousel.Caption>
                <h3>Visit our store on Old Trinity Lane in Nashville!</h3>
                <p>Our collection includes some of the biggest brands!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={drum_floor}
                alt="Percussion Floor"
                />

                <Carousel.Caption>
                <h3>Percussion Room</h3>
                <p>Shop Pearl, Yamaha, Zildjian, Meinl, and more!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-img"
                src={acoustic_room}
                alt="Acoustic Guitar Room"
                />

                <Carousel.Caption>
                <h3>Acoustic Guitar Room</h3>
                <p>
                    Martin, Taylor, Gibson, Takamine: We have all major brands!
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <section>
                <p>New Arrivals</p>
                <CardGroup className="card-container">
                    {guitars.map(g => 
                        <div key={g.id}>
                            <InstrumentCard instrument={g} />
                        </div>
                    )}
                </CardGroup>
                <p>Clearance</p>
                <p>Guitar</p>
                <CardGroup className="card-container">
                {guitars.map(g => 
                    <div key={g.id}>
                        <InstrumentCard instrument={g}/>
                    </div>
                )}
                </CardGroup>
                <p>Keyboard</p>
            </section>
        </>
    )
}

export default Home;