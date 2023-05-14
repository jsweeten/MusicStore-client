import { Link } from "react-router-dom";

function GuitarHome() {

    
    return (
        <>
        <section>
            <h1>Welcome to the guitar page, home of the guitars</h1>
        </section>
        <section>
            <Link to="electric">Electric Guitars</Link>
            <Link to="acoustic">Acoustic Guitars</Link>
        </section>

        </>
    )
}

export default GuitarHome;