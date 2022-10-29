import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">BK Mobil Haber</Navbar.Brand>
        <div>
          <Navbar.Brand href="#">Ana Sayfa</Navbar.Brand>
          <Navbar.Brand href="#home">Favoriler</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  )
}
