import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    
        const [show, setShow] = useState(false);
     
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
    <Navbar.Collapse id="responsive-navbar-nav">

    <Button variant="" onClick={handleShow}>
    <div><i style={{color:'black',marginLeft:'-60px'}}  class="fa-solid fa-bars "></i></div>
    </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

            <p> BEST SELLERS</p><hr />
            <p> EXPLORE</p><hr />
            <p> SHOP</p><hr />
            <p> SHAWLS</p><hr />
            <p> STORES</p><hr />
            <p> CAPES & JACKETS</p><hr />
            <p> GIFTING</p><hr />
            <p> TRACK</p>
            <br /><br /><br /><br />
            <div><i  class="fa-regular fa-user"></i> LOGIN</div>

        </Offcanvas.Body>
      </Offcanvas>

      <Navbar.Brand style={{marginLeft:'550px'}} href="#home"><img src="https://www.sadahglobal.com/cdn/shop/files/IMG_0872_e6751a9a-9aba-4581-8ae5-e3a181b868cd.png?v=1725389500&width=1447" style={{height:'50px', width:'150px'}} alt="" /></Navbar.Brand>
      <Nav className="me-auto">

   <div className='d-flex ms-5 ' style={{marginLeft:'90px'}}>
            <div><i style={{color:'black',marginLeft:'90px'}} class="fa-regular fa-user"></i></div>   
            <div><i style={{color:'black',marginLeft:'10px'}} class="fa-solid fa-magnifying-glass"></i></div>
            <div><i style={{color:'black',marginLeft:'10px'}} class="fa-solid fa-bag-shopping"></i></div>
           
    
   </div>
       
      </Nav>
              </Navbar.Collapse>

    </Container>
  </Navbar>
  )
}

export default Header