import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css'; // Archivo CSS para estilos personalizados

function Services() {
  return (
    <section  id='service' className="services-section">
      <Container>
        <Row className="text-center my-5">
          <Col md={12}>
            <h2 className="mb-4 xtra-sub-b">Nuestros Servicios</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={4} className="service-card mono-n">
            <h3>Corte de Cabello</h3>
            <p>Disfruta de un corte profesional adaptado a tu estilo personal. Usamos técnicas modernas para asegurarnos de que salgas satisfecho.</p>
          </Col>
          <Col md={4} className="service-card mono-n">
            <h3>Afeitado Clásico</h3>
            <p>Relájate con nuestro afeitado clásico, realizado con precisión y cuidado para obtener una experiencia suave y cómoda.</p>
          </Col>
          <Col md={4} className="service-card mono-n">
            <h3>Arreglo de Barba</h3>
            <p>Mantén tu barba en óptimas condiciones con nuestro servicio de arreglo, que incluye recorte y modelado personalizado.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
