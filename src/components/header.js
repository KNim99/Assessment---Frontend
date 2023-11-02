import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader(){
    return(
<Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container-navbar'>
        <Navbar.Brand href="#home" className='title-ceylon main-title'>Ceyloan Tea</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='title-ceylon'>HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            <Nav.Link href="#services">PRODUCTS</Nav.Link>
            <Nav.Link href="#works">CEYLOAN TEA</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>    )
}