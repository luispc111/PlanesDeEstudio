import React from 'react'
import { Col, Container, Navbar, Row, Image } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar fixed="bottom">
            <Container style={{color: "white"}} id="credits">
                <Col>
                    <Row>
                        <Col>
                            <p>
                                Creada por:
                                <a href="https://github.com/Adrian-Garcia" target="_blank"> Adrián García</a>,
                                <a href="https://github.com/alegayndra" target="_blank"> Alejandra García</a>,
                                <a href="https://github.com/EstradaDiego99" target="_blank"> Diego Estrada</a>,
                                &
                                <a href="https://github.com/luispc111" target="_blank"> Luis Alberto Pérez </a>
                            </p>
                        </Col>
                    </Row>
                    <Row className="p-2">
                        <Col>
                            <a href="https://github.com/luispc111/PlanesDeEstudio" target="_blank">
                                <Image src="./GitHub-Mark-Light-32px.png" alt="Github link"/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </Navbar>
    )
}
