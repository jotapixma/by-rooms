//@flow
import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Image from 'next/image'
import styles from '../styles/components/TopNav.module.scss';

/**
 * Muestra el hero
 * @component
 */

const TopNav = () => {

  const [product, setIsProduct] = useState('avena1');

  useEffect(() => {
    console.log('mounted ok!')
 
  },[])

    return (
      <Navbar expand="lg" className={styles.navBar}>
        <Container>
          <Navbar.Brand href="#home">
            <figure className={styles.imgContainer}>
              <Image src='/logo-rooms.png' width={146} height={100} layout="intrinsic"></Image>
            </figure>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default TopNav;

