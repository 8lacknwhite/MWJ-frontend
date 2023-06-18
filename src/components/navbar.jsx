import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/navbar.css';

function Navigator() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Nav>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Nav>
            </Container>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#features">Resources</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                    <Nav.Link href="#def">Contact Us</Nav.Link>
                    <Nav.Link bsPrefix='link-color' href="kjw" >Donate</Nav.Link> 
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigator;