import React from 'react';
import NavBar from './component/navBar';
import Home from './pages/home';
import About from './pages/about';
import Portafolio from './pages/portafolio';
import Services from './pages/services';
import Contact from './pages/contact';
import Footer from './component/fotter';
import Separator from './component/separator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importa Container además de Row y Col


import './App.css';

function App() {
  return (
    <>
      <Container fluid>
        <Row >
          <Col md={12}>
            <NavBar/>
            <Home />
            <Separator/>
            <About />
            <Separator/>
            <Services />
            <Separator/>
            <Portafolio />
            <Separator/>
            <Contact />
          </Col>
        </Row>
          <Footer />
      </Container>
    
    </>
  );
}

export default App;
