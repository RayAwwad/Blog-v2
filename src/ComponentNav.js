import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Create from './Create';

const ComponentNav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (blogs) => {
    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogs)
    })
    .then(() => {
      handleClose();
      navigate("/submitted");
    })
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My blog Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link onClick={handleShow}>Create</Nav.Link>
            {/* <Nav.Link as={Link} to="/submitted">More info</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Create onSubmit={handleSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => document.querySelector('form').requestSubmit()}>
            Create Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ComponentNav;