import { Fragment, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { fetchImages } from "../services/ImageService";
import ImageContainer from "./ImageContainer";

const HomePage = () => {
  let images: any;

  const retrieveImages: any = async() => {
    images = fetchImages(3).then((res: any) => {
      return res.data;
    })
  }
  
  useEffect(() => {
    retrieveImages();
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
      <div>
        { 
          images?.map((image: any) => (
            <ImageContainer images={image}></ImageContainer>
          ))
        }
      </div>
    </>
  );
}

export default HomePage;