import React from "react";
import { Row, Col } from "react-bootstrap";

function Home() {
    return (
        <div id="home" className=" m-0" style={{ position: "relative" }}> {/* Contenedor principal con posición relativa */}

            {/* Fondo con blur y superposición oscura */}
            <div
                style={{
                    backgroundImage: 'url(./images/fondo_tijeras.jpeg)', // Ruta correcta de la imagen
                    backgroundSize: 'cover', // Ajusta la imagen para cubrir el contenedor
                    backgroundPosition: 'center', // Centra la imagen
                    backgroundRepeat: 'no-repeat', // Evita la repetición
                    minHeight: '75vh', // Altura mínima del contenedor
                    filter: 'blur(1.5px)', // Aplica el filtro blur
                    position: 'absolute', // Posición absoluta para que sea el fondo
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1, // Envía este div detrás del contenido
                }}
            >
                {/* Superposición oscura */}
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Tonalidad oscura
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>

            {/* Contenido de texto */}
            <Row
                className="d-flex flex-column justify-content-center align-items-center text-center p-5"
                style={{
                    minHeight: '75vh', // Altura mínima del contenedor de texto
                    zIndex: 1, // Asegura que el contenido esté sobre el fondo
                    position: 'relative', // Asegura que se posicione correctamente dentro del padre
                   
                }}
            >
                <Col md={10} className="d-flex justify-content-center align-items-center p-0">
                    <h1 className="xtra-titulo">Barbería<br/>zawvv</h1>
                </Col>

                <Col md={10} className="p-3">
                    <h2 className="xtra-sub">
                        Tu estilo, nuestra pasión. Descubre la diferencia en nuestra Barbería.
                    </h2>
                </Col>
            </Row>

        </div>
    );
}

export default Home;
