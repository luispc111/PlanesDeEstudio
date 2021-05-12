import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import BarrasDeProgreso from './BarrasDeProgreso/BarrasDeProgreso';
import Semestre from './Semestre/Semestre';
import BotonesDeColor from './BotonesDeColor/BotonesDeColor';

const crearPlanDeEstudios = (clave) => {
  let materias = [
    {unidades: 4, color: 0, periodos: [true, false, false], nombre: 'Fundamentos de programación',},
    {unidades: 8, color: 0, periodos: [false, true, false], nombre: 'Programación Orientada a Objetos',},
    {unidades: 8, color: 0, periodos: [true, false, true], nombre: 'Estructura de Datos',}
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
    { color: "#BF7913", nombre: 'Incompleto' }, 
    { color: "#439630", nombre: 'Completo' }
  ]);
  const [colorSeleccionado, setColorSeleccionado] = useState(1)
  const [cantMateriasPorColor, setCantMateriasPorColor] = useState([1, 0])
  const [cantUnidadesPorColor, setCantUnidadesPorColor] = useState([1, 0])
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

    let colorMaterias = [cant, 0];
    let colorUnidades = [cant, 0];

    setPlanDeEstudios(plan);
    setCantMaterias(cant);
    setCantMateriasPorColor(colorMaterias);
    setCantUnidadesPorColor(colorUnidades);
  }, [clave])

  useEffect(() => {
    let colorMaterias = colores.map(() => 0);
    let colorUnidades = colores.map(() => 0);

    planDeEstudios.materias.forEach((semestre) => {
      semestre.forEach(materia => {
        colorMaterias[materia.color] += 1;
        colorUnidades[materia.color] += materia.unidades;
      });
    });

    setCantMateriasPorColor(colorMaterias);
    setCantUnidadesPorColor(colorUnidades);
  }, [planDeEstudios, colores])
  
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
        cantMateriasPorColor={cantMateriasPorColor}
        cantUnidadesPorColor={cantUnidadesPorColor}
      />
      <Row>
        <Col className="m-0 p-0 mt-3">
          <BarrasDeProgreso 
            listaColores={colores}
            cantMateriasPorColor={cantMateriasPorColor}
            totalMaterias={cantMaterias}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        {planDeEstudios.materias.map((semestre, indice) => (
          <Semestre
            key={indice}
            numSemestre={indice}
            materias={semestre}
            tec21={planDeEstudios?.tec21}
            colorSeleccionado={colorSeleccionado}
            clicks={{clickSemestre, clickMateria}}
            listaColores={colores}
          />
        ))}
      </Row>
    </Container>
  )
}
