
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavHeader() {
  return (
    <Navbar bg="primary" variant="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">Jay's Music</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Guitar" id="nav-guitar-dropdown">
              <NavDropdown.Item href="/guitar/electric">Electric</NavDropdown.Item>
              <NavDropdown.Item href="/guitar/acoustic">Acoustic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/guitar/used">Used Guitars</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/bass">Bass</Nav.Link>
            <Nav.Link href="/keyboard">Keyboard</Nav.Link>
            <NavDropdown title="Accessories" id="nav-acc-dropdown">
              <NavDropdown.Item href="/acc/strings">Strings</NavDropdown.Item>
              <NavDropdown.Item href="/acc/cables">Cables</NavDropdown.Item>
              <NavDropdown.Item href="/acc/straps">Straps</NavDropdown.Item>
              <NavDropdown.Item href="/acc/cleaning">Instrument Maintenance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/clearance">
                Clearance
              </NavDropdown.Item>
            </NavDropdown>
              <Navbar.Text className="justify-content-end">
                Signed in as: <a href="/profile">User</a>
              </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;