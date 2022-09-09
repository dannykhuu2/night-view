import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../../store/types";
import { logout } from "../Auth/store/authSlice";
import { logoutAPI} from "../../services/authService";

const Header = () => {

  const userSelector = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
     dispatch(logout());
     logoutAPI();
  }
  
  return (
      <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Night View</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {userSelector.user &&
            <Nav.Link as={Link} to="/likes">Liked Images</Nav.Link>
          }
        </Nav>
        {!userSelector.user || userSelector.error
          ?         
          <Nav>
            <Nav.Link as={Link} to="/auth/signin">Log in</Nav.Link>
            <Nav.Link as={Link} to="/auth/signup">Sign up</Nav.Link>
          </Nav>
          :
          <Nav>
            <Button onClick={() => handleLogout()}>Log out</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
}

export default Header;