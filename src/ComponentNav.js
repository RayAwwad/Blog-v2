import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ComponentNav = () => {

  return (
     <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My blog Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
            <Nav.Link as={Link} to="/">More info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
     </> );

}
 
export default ComponentNav;