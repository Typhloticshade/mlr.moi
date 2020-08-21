import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand align="center"><Link to="/">Michael L Reed</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link class="nav-link" to="/">Home</Link>
                        <Link class="nav-link" to="/portfolio">Portfolio</Link>
                        <NavDropdown title="About Me" id="basic-nav-dropdown">
                            <Link class="nav-link" to="/resume">Resume</Link>
                            <NavDropdown.Divider />
                            <Link class="nav-link" to="/contact">Contact Me</Link>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;