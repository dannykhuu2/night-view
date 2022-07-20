import React, { Fragment, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { fetchImages } from "../services/ImageService";

const HomePage = () => {
  
  useEffect(() => {
    fetchImages(3);
  });

  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Night View</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Liked Images</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HomePage;