import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'


import {
    BrowserRouter as router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>

            <header>
                <div className="container">
                    <Navbar expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#"><h1 className='fs-2 fw-bold logo-clr'>Mantor</h1></Navbar.Brand>
                            
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }} navbarScroll>

                                    <Link to="/" className="text-decoration-none text-black fw-normal px-3">Home</Link>
                                    <Link to="/About" className="text-decoration-none text-black fw-normal px-3">About</Link>
                                    <Link to="/Course" className="text-decoration-none text-black fw-normal px-3">Course</Link>
                                    <Link to="/Trainers" className="text-decoration-none text-black fw-normal px-3">Trainers</Link>
                                    <Link to="/Event" className="text-decoration-none text-black fw-normal px-3">Event</Link>
                                    {/* <Link to="/Pricing" className="text-decoration-none text-black fw-bold px-3">Pricing</Link> */}
                                    {/* <Link to="/Drop Down" className="text-decoration-none text-black fw-bold px-3">Drop Down</Link> */}
                                    <Link to="/Contact" className="text-decoration-none text-black fw-normal px-3">Contact</Link>
                                </Nav>
                                
                                <Form className="d-flex">
                                     <a href="" className='text-decoration-none px-4 py-2 text-white rounded-pill header-btn-clr'>Get Started</a>
                                </Form>
                                </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </header>

        </React.Fragment>
    )
}

export default Header


// <div className="container">
//                     <Navbar expand="lg" className="">
//                         <Container fluid>
//                             <Navbar.Brand href="#" className='fs-2 fw-bold logo-clr nav-fixed'>MANTOR</Navbar.Brand>
//                             <Navbar.Toggle aria-controls="navbarScroll" />
//                             <Navbar.Collapse id="navbarScroll">
//                                 <Nav
//                                     className="me-auto my-lg-0"
//                                     style={{ maxHeight: '100px' }}
//                                     navbarScroll>
//                                     <Link to="/" className="text-decoration-none"><Nav.Link href="#action1" className='fw-bolder'>Home</Nav.Link></Link>
//                                     <Link to="/About" className="text-decoration-none"><Nav.Link href="#action2" className='fw-bolder'>About</Nav.Link>                                    </Link>
//                                     <Link to="/Courses" className="text-decoration-none"><Nav.Link href="#" className='fw-bolder'>Courses</Nav.Link></Link>
//                                     <Link to="/Trainers" className="text-decoration-none"><Nav.Link href="#" className='fw-bolder'>Trainers</Nav.Link></Link>
//                                     <Link to="/Event" className="text-decoration-none"><Nav.Link href="#" className='fw-bolder'>Events</Nav.Link></Link>
//                                     <Link to="/Pricing" className="text-decoration-none"><Nav.Link href="#" className='fw-bolder'>Pricing</Nav.Link></Link>
//                                     <Link to="/Drop Down" className="text-decoration-none"><Nav.Link href="#" className='fw-bolder'>Drop Down</Nav.Link></Link>
//                                     <Link to="/Contact" className="text-decoration-none"><Nav.Link href="#" className='fw-bolder'>Contact</Nav.Link></Link>
//                                 </Nav>
//                                 <Form className="d-flex">
//                                     <Button className='header-btn-clr rounded-pill px-4 py-2 header-bt-hvr'>Get Started</Button>
//                                 </Form>
//                             </Navbar.Collapse>
//                         </Container>
//                     </Navbar>
//                 </div>