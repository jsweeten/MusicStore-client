import { Link } from "react-router-dom";

function BassHome() {

    
    return (
        <>
            <section>
                <h1>Welcome to the guitar page, home of the byeayssssssman</h1>
            </section>
            <section>
                <Link to="electric">Electric Bass</Link>
                <Link to="acoustic">Acoustic Bass</Link>
            </section>
        </>
    )
}

export default BassHome;