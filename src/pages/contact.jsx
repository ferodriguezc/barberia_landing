import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css'; // Archivo CSS para estilos personalizados

function Contact() {
  const whatsappLink = 'https://wa.me/569XXXXXXXX'; // Reemplaza con tu número de WhatsApp

  return (
    <div>
      <Row id='contact' className="d-flex flex-column justify-content-center align-items-center my-5 mx-5">
        <Col md={11} className="text-center">
          <h2 className="mb-4 xtra-sub-b">Contáctanos</h2>
          <Button 
            variant="success" 
            href={whatsappLink} 
            target="_blank" 
            className="whatsapp-button"
          >
            Contáctanos por WhatsApp
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
