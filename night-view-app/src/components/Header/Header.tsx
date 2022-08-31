import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Night View</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/likes">Liked Images</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/auth/signin">Log in</Nav.Link>
            <Nav.Link href="/auth/signup">Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;