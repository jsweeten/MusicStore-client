import { NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";

function Nav({ isLoggedIn }) {

    return (
        <>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/guitars">Guitars</Link>
                <Link to="/basses">Basses</Link>
                <Link to="/keyboards">Keyboards</Link>
                <Link to="/drums">Drums</Link>
                <Link to="/mics">Microphones</Link>
                <Link to="/speakers">Speakers</Link>
                <Link to="/accessories">Accessories</Link>
                { isLoggedIn ? <></> : <Link to="/login">Login/Register</Link> }
            </Navbar>
        </>
    )
}

export default Nav;