import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Night View</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/likes">Liked Images</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;