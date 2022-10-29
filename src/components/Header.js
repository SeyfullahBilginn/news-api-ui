import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Navbar variant="dark" bg="primary" expand="xxl">
      <Container fluid>
          <Link to="/" className='Header-link'>BK Mobil Haber</Link>
        <div>
          <Link to="/" className='Header-link-secondary'>Ana Sayfa</Link>
          <Link to="/favourites" className='Header-link-secondary'>Favouriler</Link>
        </div>
      </Container>
    </Navbar>
  )
}
