import React, { useContext } from 'react';
import { Image, Col, Container, Row } from 'react-bootstrap' 

import { UserContext } from "../../context";

export default function Profile() {
  const loggedUser = useContext(UserContext);

  console.log(loggedUser)
  return (
    <Container className="text-center">
      <Row>
        <Col className="Profile">
          <Image
            className="imagen-perfil mb-4" 
            width={128}
            height={128}
            src={loggedUser?.urlFoto}
            roundedCircle
          />
          <h2>{`${loggedUser?.nombre} ${loggedUser?.apellido}`}</h2>
          <h2>{loggedUser?.matricula}</h2>
        </Col>
        
      </Row>
    </Container>
  );
}
