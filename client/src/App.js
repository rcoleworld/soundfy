import React, { useState } from 'react';
import { InputGroup, Input, Container, Row, Col } from 'reactstrap';

import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

import TopBar from './components/elements/TopBar';
import './App.css';
import SoundfyLogo from './soundfy.svg';
import InfoToast from './components/elements/InfoToast';
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  return (
    <div className='App'>
      <TopBar></TopBar>
        
      <img className='logo' src={SoundfyLogo}></img>
      <header className='slogan'>A social hub for the music enthusiast.</header>
      <div id='search' className='search-container'>
        <header className='explore-text'>
          Start Exploring Your Favorite Albums, Artists, and Songs
        </header>
        <InputGroup className='search-group'>
          <Input className='search-bar' placeholder='Explore' />
        </InputGroup>
      </div>
      <div className='more-info-container'>
      <ScrollAnimation duration={1} animateIn="fadeIn">
        <Container className='more-info-toasts'>
          <Row xs='1' sm='2' md='4'>
            <Col>
              <InfoToast
                header='Listen'
                body='Listen to your favorite albums and songs from any genre and by any artist.'
                ></InfoToast>
            </Col>
            <Col>
              <InfoToast
                header='Engage'
                body='Engage with other enthusiasts who have common or different musical tastes.'
                ></InfoToast>
            </Col>
            <Col>
              <InfoToast
                header='Discover'
                body='Discover new songs, albums, and artists. '
                ></InfoToast>
            </Col>
            <Col>
              <InfoToast
                header='Critique'
                body='Critique music from your favorite artists. Discuss musical tastes in a respectful environment.'
                ></InfoToast>
            </Col>
          </Row>
        </Container>
                </ScrollAnimation>
        <Footer className='footer' bottom='Made with ❤️ by rcoleworld'></Footer>
      </div>
    </div>
  );
}

export default App;
