import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import BarrasDeProgreso from './BarrasDeProgreso/BarrasDeProgreso';
import Semestre from './Semestre/Semestre';
import BotonesDeColor from './BotonesDeColor/BotonesDeColor';

const crearPlanDeEstudios = (clave) => {
  let materias = [
    {color: 'orange', periodos: [true, false, false], nombre: 'Fundamentos de programación',},
    {color: 'orange', periodos: [false, true, false], nombre: 'Programación Orientada a Objetos',},
    {color: 'orange', periodos: [true, false, true], nombre: 'Estructura de Datos',}
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

  return { plan: { nombre: 'ITC 11', tec21: true, materias: carrera, clave }, cant }
}

/** Vista de la tabla de un plan de estudio individual, junto con una lista de colores y barras de progreso **/
export default function PlanDeEstudio() {

  const { clave } = useParams();

  const [planDeEstudios, setPlanDeEstudios] = useState({materias: []});
  // eslint-disable-next-line
  const [colores, setColores] = useState([
    { nombre: "orange", tag: 'Incompleto' }, 
    { nombre: "green",  tag: 'Completo' }, 
    { nombre: "blue",   tag: 'Semestre-1' }, 
    { nombre: "purple", tag: 'Semestre-2' }, 
    { nombre: "pink",   tag: 'Semestre-3' }, 
    { nombre: "red",    tag: 'Semestre-4' }, 
    { nombre: "teal",   tag: 'Semestre-5' }
  ]);
  const [colorSeleccionado, setColorSeleccionado] = useState('green')
  const [cantMateriasPorColor, setCantMateriasPorColor] = useState({ orange: 1, green: 0, blue: 0, purple: 0, pink: 0, red: 0, teal: 0 })
  const [cantMaterias, setCantMaterias] = useState(1);

  const clickMateria = (sem, materia) => {
    let plan = JSON.parse(JSON.stringify(planDeEstudios));
    plan.materias[sem][materia].color = colorSeleccionado;
    setPlanDeEstudios(plan);
  }

  const clickSemestre = (sem) => {
    let plan = JSON.parse(JSON.stringify(planDeEstudios));
    plan.materias[sem].forEach(materia => materia.color = colorSeleccionado);
    setPlanDeEstudios(plan);
  }

  useEffect(() => {
    // TODO: request a la base de datos

    let { plan, cant } = crearPlanDeEstudios(clave);

    let colorMaterias = { orange: 0, green: 0, blue: 0, purple: 0, pink: 0, red: 0, teal: 0 };

    colorMaterias.orange = cant;

    setPlanDeEstudios(plan);
    setCantMaterias(cant);
    setCantMateriasPorColor(colorMaterias);
  }, [clave])

  useEffect(() => {
    let plan = JSON.parse(JSON.stringify(planDeEstudios));
    let colorMaterias = { orange: 0, green: 0, blue: 0, purple: 0, pink: 0, red: 0, teal: 0 };

    plan.materias.forEach((semestre) => {
      semestre.forEach(materia => {
        colorMaterias[materia.color] += 1;
      });
    });

    setCantMateriasPorColor(colorMaterias);
  }, [planDeEstudios])
  
  document.title = planDeEstudios.nombre

  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="titulo-tabla"> Plan de estudios {planDeEstudios.nombre} </h2>
        </Col>
      </Row>
      <BotonesDeColor
        colores={colores}
        cambiarColores={setColores}
        cambiarColorSeleccionado={setColorSeleccionado}
        colorSeleccionado={colorSeleccionado}
      />
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
            numSemestre={indice}
            materias={semestre}
            tec21={planDeEstudios?.tec21}
            colorSeleccionado={colorSeleccionado}
            clicks={{clickSemestre, clickMateria}}
          />
        ))}
      </Row>
    </Container>
  )
}
