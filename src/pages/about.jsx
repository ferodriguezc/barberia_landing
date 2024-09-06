import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import '../App.css'; // Archivo CSS para estilos personalizados

function About() {
  return (
    <section id='about' className="about-section my-10 ">
      <Container className=' my-5'>
        <Row className="justify-content-center text-center my-5">
          <Col md={8}>
            <h3 className="mb-4 xtra-sub-b">Sobre Nosotros</h3>
            <p className="lead">
              Somos un equipo pequeño pero apasionado de  barberos en Puente Alto, Santiago. Nos dedicamos a ofrecer cortes y afeitados de calidad con un toque personal.
              Nuestra misión es resaltar tu estilo en un ambiente acogedor y profesional. Ven y experimenta la diferencia aqui. ¡Te esperamos!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
