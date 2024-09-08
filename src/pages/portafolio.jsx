import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Asegúrate de tener el archivo CSS importado

function Portafolio() {
  return (
    <section  id='portafolio' className="portafolio-section">
      <Container>
        <Row className="text-center my-5">
          <Col md={12}>
            <h2 className="mb-4 xtra-sub-b">Portafolio de Trabajos</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portafolio;
