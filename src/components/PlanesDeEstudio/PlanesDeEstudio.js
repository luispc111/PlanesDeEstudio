import React, { useState, useEffect, useCallback } from 'react';
import { Button, Col, Container, Row, FormControl, InputGroup } from 'react-bootstrap';

const PlanesDeEstudio = () => {
  const [planesDeEstudio, setPlanesDeEstudio] = useState([]);

  useEffect(() => {
    let planes = [
      {nombre: 'ITC 11', clave: 'itc_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
    ];

    setPlanesDeEstudio(planes);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="titulo">Planes de estudio</h1>
        </Col>
      </Row>
      <Row>
        <Container fluid>
              <h2
                htmlFor="studyPlanSelected"
                className="block text-sm font-bold mb-2 text-white"
              >
                  Selecciona tu plan de estudios:
              </h2>
              <InputGroup>
                <FormControl
                  placeholder="Ingresa tu carrera"
                  aria-label="Clave del plan de estudio"
                />
              </InputGroup>
        </Container>
      </Row>
      <Row>
        <Col>
          {
            planesDeEstudio.map(({clave, nombre}, indice) => (
              <Button 
                key={indice}
                variant="primary"
                value={clave}
              >
                {nombre}    
              </Button>
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default PlanesDeEstudio;
