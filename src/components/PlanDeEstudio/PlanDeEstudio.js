import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

import Materia from './Materias/Materia';

export default function PlanDeEstudio() {

  const { clave } = useParams();

  const [planDeEstudios, setPlanDeEstudios] = useState({});

  useEffect(() => {
    // TODO: request a la base de datos

    let materia = {
      nombre: 'Fundamentos de programación'
    }

    let semestre = [];

    for (let i = 0; i < 6; i++) {
      semestre.push(materia);
    }

    let carrera = [];

    for (let i = 0; i < 6; i++) {
      carrera.push(semestre);
    }

    let plan = {
      nombre: 'ITC 11',
      tec21: false,
      materias: carrera
    }

    setPlanDeEstudios(plan)

  }, [])

  document.title = planDeEstudios.nombre

  return (
    <Container style={{color: "white"}} fluid>
      <Row>
        <h2>
          Plan de estudios {planDeEstudios.nombre}
        </h2>
      </Row>
      <Row>
        <Materia 
          nombre="Nombre Materia"
        />
      </Row>
    </Container>
  )
}
