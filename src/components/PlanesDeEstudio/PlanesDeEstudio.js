import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button, Container, Row, FormControl, InputGroup } from 'react-bootstrap';

import { PUBLIC_URL, BACKEND_URL } from '../utils'; 

/** Vista de lista de todos los planes de estudio */
export default function PlanesDeEstudio() {
  const [planesDeEstudio, setPlanesDeEstudio] = useState([]);

  const [filtroCarreras, setFiltroCarreras] = useState('');

  useEffect(() => {
    axios.get(`${BACKEND_URL}/planes`)
    .then(res => {
      setPlanesDeEstudio(res.data.map(plan => ({ nombre: plan.siglas,  clave: plan.siglas})));
    })
    .catch((err) => err);
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
            href={`${PUBLIC_URL}/#/plan/${clave}`}
          >
            {nombre}    
          </Button>
        ))}
      </Row>
    </Container>
  )
}
