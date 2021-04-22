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

const crearPlanDeEstudios = (clave) => {
  let materias = [
    {nombre: 'Fundamentos de programación',},
    {nombre: 'Programación Orientada a Objetos',},
    {nombre: 'Estructura de Datos',}
  ]

  let cant = 0;

  let carrera = [];

  for (let i = 0; i < 9; i++) {
    let semestre = [];

    for (let i = 0; i < 7; i++) {
      semestre.push(materias[Math.floor(Math.random() * 3)]);
      cant++;
    }

    carrera.push(semestre);
  }

  return { plan: { nombre: 'ITC 11', tec21: false, materias: carrera, clave }, cant }
}

/** Vista de la tabla de un plan de estudio individual, junto con una lista de colores y barras de progreso **/
export default function PlanDeEstudio() {

  const { clave } = useParams();

  const [planDeEstudios, setPlanDeEstudios] = useState({materias: []});
  const [colores, setColores] = useState(["orange", "green", "blue", "purple", "pink", "red", "teal"])
  const [colorSeleccionado, setColorSeleccionado] = useState('green')
  const [cantMateriasPorColor, setCantMateriasPorColor] = useState({
    orange: 0,
    green: 0,
    blue: 0,
    purple: 0,
    pink: 0,
    red: 0,
    teal: 0
  })
  const [cantMaterias, setCantMaterias] = useState(0);

  useEffect(() => {
    // TODO: request a la base de datos

    let { plan, cant } = crearPlanDeEstudios(clave);

    let colorMaterias = JSON.parse(JSON.stringify(cantMateriasPorColor));

    colorMaterias.orange = cant;

    setPlanDeEstudios(plan);
    setCantMaterias(cant);
    setCantMateriasPorColor(colorMaterias);
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
      <Row>
        <Col className="m-0 p-0 mt-4">
          <BarrasDeProgreso 
            listaColores={colores}
            cantMateriasPorColor={cantMateriasPorColor}
            totalMaterias={cantMaterias}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        {planDeEstudios.materias.map((semestre, indice) => (
          <Semestre
            key={indice}
            materias={semestre}
            numSemestre={indice + 1}
            tec21={planDeEstudios?.tec21}
            colorSeleccionado={colorSeleccionado}
            listaColores={colores}
            cosasColores={{colores, cantMateriasPorColor, setCantMateriasPorColor, cantMaterias}}
          />
        ))}
      </Row>
    </Container>
  )
}
