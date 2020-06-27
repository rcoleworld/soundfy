import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import './elements.css';
import SpotifyLogo from '../../Spotify_Icon_RGB_White.png';

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const showLogin = () => setIsLogin(!isLogin);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='topbar' light expand='md'>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand className="nav-item" href='/'>SoundFy</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink className="nav-item" href='#search-bar'>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href='#search'>Search</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Button onClick={showLogin} className='login-button' outline>
          Let's Get Started
        </Button>
        <Modal className='login-card' isOpen={isLogin} toggle={showLogin}>
          <ModalHeader toggle={showLogin}>Sign In</ModalHeader>
          <ModalBody className='login-card'>
            <Button href='http://localhost:8081/login' className='spotify-login-button grow'>
              <img className='spotify-logo' src={SpotifyLogo} />
              <div className='button-text'>Spotify</div>
            </Button>
          </ModalBody>
        </Modal>
      </Navbar>
    </div>
  );
};

export default TopBar;
