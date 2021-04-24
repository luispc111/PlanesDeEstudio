import React, { useState, useEffect } from 'react';
import { Button, Container, Row, FormControl, InputGroup } from 'react-bootstrap';

import { PUBLIC_URL } from './../shared/utils'; 

/** Vista de lista de todos los planes de estudio */
export default function PlanesDeEstudio() {
  const [planesDeEstudio, setPlanesDeEstudio] = useState([]);

  const [filtroCarreras, setFiltroCarreras] = useState('');

  useEffect(() => {
    // TODO: Cambiar a un request al back cuando esté funcionando
    let planes = [
      {nombre: 'ITC 11', clave: 'itc_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 17', clave: 'lad_17',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAD 11', clave: 'lad_11',},
      {nombre: 'LAF 11', clave: 'laf_11',},
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

  const planesFiltrados = planesDeEstudio.filter(carrera => carrera.nombre.includes(filtroCarreras)).sort((a, b) => (a.nombre).localeCompare(b.nombre));

  return (
    <Container fluid>
      <Row className="mb-3" width ="100%">
        <h2 className="mb-4">
          Selecciona tu plan de estudios:
        </h2>
        <InputGroup>
          <FormControl
            placeholder="Ingresa tu carrera"
            aria-label="Clave del plan de estudio"
            onChange={(event) => {setFiltroCarreras(event.target.value.toUpperCase())}}
          />
        </InputGroup>
      </Row>
      <Row className="mb-3" width ="100%">
        {planesFiltrados.map(({clave, nombre}, indice) => (
          <Button
            className="m-2 boton-carrera"
            key={indice}
            variant="primary"
            value={clave}
            href={PUBLIC_URL + `/plan/${clave}`}
          >
            {nombre}    
          </Button>
        ))}
      </Row>
    </Container>
  )
}
