import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Asegúrate de tener el archivo CSS importado

function Portafolio() {
  return (
    <section  id='portafolio' className="portafolio-section">
      <Container>
        <Row className="text-center my-5">
          <Col md={12}>
            <h3 className="mb-4 xtra-sub-b">Portafolio de Trabajos</h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="iframe-container">
              <iframe 
                src="https://www.instagram.com/_zawvv._/embed"
                allowFullScreen
                className="responsive-iframe"
                height={"550"}
                title="Instagram Page"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portafolio;
