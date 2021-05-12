import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

import { BACKEND_URL } from '../utils'; 
import { UserContext } from "./../../context";

import BarrasDeProgreso from './BarrasDeProgreso/BarrasDeProgreso';
import Semestre from './Semestre/Semestre';
import BotonesDeColor from './BotonesDeColor/BotonesDeColor';

/** Vista de la tabla de un plan de estudio individual, junto con una lista de colores y barras de progreso **/
export default function PlanDeEstudio() {
  const loggedUser = useContext(UserContext);
  const { matricula } = loggedUser || {};

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

  const guardarPlanificado = (e) => {
    let plan = {
      usuario: matricula,
      siglas: planDeEstudios.siglas,
      nombre: planDeEstudios.nombre,
      etiquetas: JSON.parse(JSON.stringify(colores)),
      materias: planDeEstudios.materias.map(sem => sem.map(materia => ({ clave: materia.clave, color: materia.color}))),
    }
    axios.put(`${BACKEND_URL}/planificados/${planDeEstudios._id}`, plan)
    .then(res => console.log(res.data))
    .catch((err) => err);
  }

  /** Consigue la información del plan de estudios **/
  useEffect(() => {
    if (!loggedUser) {
      axios.get(`${BACKEND_URL}/planes/${clave}`)
      .then(res => {
        let planOficial = JSON.parse(JSON.stringify(res.data));
        let cant = 0;

        planOficial.materias = planOficial.materias.map(sem => sem.map(materia => {
          cant++;
          return {
            clave: materia.clave,
            nombre: materia.nombre,
            unidades: materia.unidades,
            color: 0
          }
        }))
    
        let colorMaterias = [cant, 0]

        setPlanDeEstudios(planOficial);
        setCantMaterias(cant);
        setCantMateriasPorColor(colorMaterias);

      })
      .catch((err) => err);
    } else {
      axios.post(`${BACKEND_URL}/planificados/crearPlanificadoBase/${clave}`, { matricula })
      .then(res => {
        console.log(res)
        let cant = 0;
        let oficial = res.data.oficial;
        let planificado = res.data.planificado;
        let plan = {
          _id: planificado._id,
          nombre: oficial.nombre,
          siglas: oficial.siglas,
          esTec21: oficial.esTec21,
          materias: oficial.materias.map((sem, semIndice) => sem.map((materia, materiaIndice) => {
            cant++;
            return {
              nombre: materia.nombre,
              clave: materia.clave,
              color: planificado.etiquetas[semIndice][materiaIndice].color,
              unidades: materia.unidades
            }
          })),
        }
        setPlanDeEstudios(plan);
        setCantMaterias(cant);
        setColores(planificado.etiquetas);
      })
      .catch((err) => err);
    }
  }, [clave, loggedUser, matricula])

  /** Actualiza la cantidad de materias por color **/
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
      <Row>
        <Col>
          <Button
            onClick={guardarPlanificado}
          >
            Guardar Plan
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
