import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import { Link } from 'react-router-dom';
import listdata from '../../utilities/listitems';


function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary Navji" >
            <Container fluid className='NAvji'>
                <Navbar.Brand href="#" className='text-white'>Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll"   >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScrol


                    >
                        {
                            listdata.map((item) => (
                                <Nav.Link className='text-white ' >
                                    {item.name}
                                    <Link to={item.link} key={item.id} className='text-white '>
                                    </Link>


                                </Nav.Link>
                            ))
                        }

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />


                        <Button variant="outline-success" style={{ background: 'skyblue' }} >Search</Button>
                        <Link to='/Cart'><i class="fa-solid fa-cart-shopping" style={{ fontSize: "30px", marginTop: "10px", color: "pink", marginLeft: "10px" }}></i></Link>




                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation;