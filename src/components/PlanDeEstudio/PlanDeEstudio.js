import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import BarrasDeProgreso from './BarrasDeProgreso/BarrasDeProgreso';
import Semestre from './Semestre/Semestre';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <div
      className={`boton-color bg-${color} ${(color === colorSeleccionado) ? 'boton-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color)}
    />
  )
}

/** Vista de la tabla de un plan de estudio individual, junto con una lista de colores y barras de progreso **/
export default function PlanDeEstudio() {

  const { clave } = useParams();

  const [planDeEstudios, setPlanDeEstudios] = useState({materias: []});

  const colores = ["orange", "green", "blue", "purple", "pink", "red", "teal"];

  const [colorSeleccionado, setColorSeleccionado] = useState('green')

  useEffect(() => {
    // TODO: request a la base de datos

    let materias = [
      {
        nombre: 'Fundamentos de programación',
      },
      {
        nombre: 'Programación Orientada a Objetos',
      },
      {
        nombre: 'Estructura de Datos',
      }
    ]

    let carrera = [];

    for (let i = 0; i < 9; i++) {
      let semestre = [];

      for (let i = 0; i < 7; i++) {
        semestre.push(materias[Math.floor(Math.random() * 3)]);
      }

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
    <Container fluid>
      <Row>
        <Col>
          <h2 className="titulo-tabla">
            Plan de estudios {planDeEstudios.nombre}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <BarrasDeProgreso />
        </Col>
      </Row>
      <Row className="colorBtns mt-4">
        {colores.map((color, indice) => (
          <BotonDeColor
            key={indice}
            color={color}
            cambiarColorSeleccionado={setColorSeleccionado}
            colorSeleccionado={colorSeleccionado}
          />
        ))}
      </Row>
      <Row className="mt-4">
        {planDeEstudios.materias.map((semestre, indice) => (
          <Semestre
            key={indice}
            materias={semestre}
            numSemestre={indice + 1}
            tec21={planDeEstudios.tec21}
            colorSeleccionado={colorSeleccionado}
            listaColores={colores}
          />
        ))}
      </Row>
    </Container>
  )
}
