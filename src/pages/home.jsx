import React from "react";
import { Row, Col } from "react-bootstrap";

function Home() {
    return (
        <div id="home" className="m-0" style={{ position: "relative" }}>
            {/* Fondo con blur y superposición oscura */}
            <div
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/fondo_barberia.webp)`, // Usa process.env.PUBLIC_URL para la ruta
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: "25px"
                }}
            >

                <Row
                    className="d-flex flex-column justify-content-center align-items-center text-center p-5"

                >
                    <Col md={10} className="d-flex justify-content-center align-items-center p-0">
                        <h1 className="xtra-titulo">Barbería<br />zawvv
                            <p className="mono-b">
                                Tu estilo, nuestra pasión. Descubre la diferencia en nuestra Barbería.
                            </p>
                        </h1>
                    </Col>


                </Row>

            </div>


        </div>
    );
}

export default Home;
