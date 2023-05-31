import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllGuitars } from "../../../modules/guitarManager";
import InstrumentCard from "../InstrumentCard";

function GuitarHome() {
    const [ guitars, setGuitars ] = useState([]);

    const getGuitars = () => {
        getAllGuitars().then(data => setGuitars(data))
    }

    useEffect(() => {
        getGuitars()
    }, []);
    
    return (
        <>
        <section>
            <h1>Welcome to the guitar page, home of the guitars</h1>
        </section>
        <section>
            <Link to="electric">Electric Guitars</Link>
            <Link to="acoustic">Acoustic Guitars</Link>
        </section>
        <section>
            <div className="guitar-container">
                {guitars.map(g => 
                    <div key={g.id}>
                        <InstrumentCard instrument={g} />
                    </div>
                    )}
            </div>
        </section>
        </>
    )
}

export default GuitarHome;