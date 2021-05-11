import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import { BACKEND_URL } from '../utils'; 
import { UserContext } from "./../../context";

import BarrasDeProgreso from './BarrasDeProgreso/BarrasDeProgreso';
import Semestre from './Semestre/Semestre';
import BotonesDeColor from './BotonesDeColor/BotonesDeColor';

const crearPlanDeEstudios = (clave) => {
  let materias = [
    {color: 0, periodos: [true, false, false], nombre: 'Fundamentos de programación',},
    {color: 0, periodos: [false, true, false], nombre: 'Programación Orientada a Objetos',},
    {color: 0, periodos: [true, false, true], nombre: 'Estructura de Datos',}
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

const conseguirPlanDeEstudios = (clave, setPlanDeEstudios, setCantMaterias, setCantMateriasPorColor) => {
  axios.get(`${BACKEND_URL}/planes/${clave}`)
  .then(res => {
    // setPlanesDeEstudio(res.data.map(plan => ({ nombre: plan.siglas,  clave: plan.siglas})));
    console.log(res.data)
    let parsedData = JSON.parse(JSON.stringify(res.data));

    let cant = 0;

    let plan = {
      nombre: parsedData.nombre,
      esTec21: parsedData.esTec21,
      materias: parsedData.materias.map(sem => sem.map(materia => {
        let mat = {
          clave: materia.clave,
          nombre: materia.nombre,
          unidades: materia.unidades,
          color: 0
        }
        cant++;
        return mat;
      }))
    }

    let colorMaterias = [cant, 0]

    setPlanDeEstudios(plan);
    setCantMaterias(cant);
    setCantMateriasPorColor(colorMaterias);
  })
  .catch((err) => err);
}

/** Vista de la tabla de un plan de estudio individual, junto con una lista de colores y barras de progreso **/
export default function PlanDeEstudio() {
  const loggedUser = useContext(UserContext);
  // const { matricula } = loggedUser || {};

  const { clave } = useParams();

  const [planDeEstudios, setPlanDeEstudios] = useState({materias: []});
  // eslint-disable-next-line
  const [colores, setColores] = useState([
    { color: "#BF7913", nombre: 'Incompleto' }, 
    { color: "#439630", nombre: 'Completo' }
  ]);
  const [colorSeleccionado, setColorSeleccionado] = useState(1)
  const [cantMateriasPorColor, setCantMateriasPorColor] = useState([1, 0])
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
    if (loggedUser) {

    } else {
      conseguirPlanDeEstudios(clave, setPlanDeEstudios, setCantMaterias, setCantMateriasPorColor);
    }
  }, [clave, loggedUser])

  useEffect(() => {
    let colorMaterias = colores.map(() => 0);

    planDeEstudios.materias.forEach((semestre) => {
      semestre.forEach(materia => {
        colorMaterias[materia.color] += 1;
      });
    });

    setCantMateriasPorColor(colorMaterias);
  }, [planDeEstudios, colores])
  
  document.title = planDeEstudios.nombre

  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="titulo-tabla"> {planDeEstudios.nombre} </h2>
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
            tec21={planDeEstudios?.esTec21}
            colorSeleccionado={colorSeleccionado}
            clicks={{clickSemestre, clickMateria}}
            listaColores={colores}
          />
        ))}
      </Row>
    </Container>
  )
}
