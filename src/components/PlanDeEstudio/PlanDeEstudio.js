import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

// import Materia from './Materias/Materia';

const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <div
      className={`boton-color bg-${color} ${(color === colorSeleccionado) ? 'boton-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color)}
    />
  )
}

const Materia = ({ nombre, tec21, colorSeleccionado, colorSemestre, cambiarColorSemestre, semestreClickeado }) => {
  const [colorDeFondo, setColorDeFondo] = useState('orange');

  useEffect(() => {
    if (semestreClickeado) {
      setColorDeFondo(colorSemestre);
    }
  }, [colorSemestre])

  const click = () => {
    setColorDeFondo(colorSeleccionado);
    cambiarColorSemestre('orange');
  }

  return (
    <div className={`materia labelMateria bg-${colorDeFondo}`} onClick={() => click()}>
      <label>{nombre}</label>
      {tec21 && (
        <div>
          aaaaaaaaa
        </div>
      )}
    </div>
  )
}

const Semestre = ({ materias, numSemestre, tec21, colorSeleccionado }) => {
  const [colorDeFondo, setColorDeFondo] = useState('orange');
  const [clickeado, setClickeado] = useState(false);

  useEffect(() => {
    setClickeado(false);
  }, [clickeado])

  const botonClickeado = () => {
    setColorDeFondo(colorSeleccionado)
    setClickeado(true);
  }

  return (
    <Col className="semestre">
      <div className={`materia labelMateria bg-${colorDeFondo}`} onClick={() => botonClickeado()}><label>Semestre {numSemestre}</label></div>
      {materias.map((materia, indice) => (
        <Materia
          key={indice}
          nombre={materia.nombre}
          tec21={tec21}
          colorSeleccionado={colorSeleccionado}
          colorSemestre={colorDeFondo}
          cambiarColorSemestre={setColorDeFondo}
          semestreClickeado={clickeado}
        />
      ))}
    </Col>
  )
}

export default function PlanDeEstudio() {

  const { clave } = useParams();

  const [planDeEstudios, setPlanDeEstudios] = useState({materias: []});

  const [colores, setColores] = useState(["orange", "green", "blue", "purple", "pink", "red", "teal"]);

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
    <Container style={{color: "white"}} fluid>
      <Row>
        <h2 className="titulo-tabla">
          Plan de estudios {planDeEstudios.nombre}
        </h2>
      </Row>
      <Row className="colorBtns">
        {colores.map((color, indice) => (
          <BotonDeColor
            key={indice}
            color={color}
            cambiarColorSeleccionado={setColorSeleccionado}
            colorSeleccionado={colorSeleccionado}
          />
        ))}
      </Row>
      <Row className="table">
        {planDeEstudios.materias.map((semestre, indice) => (
          <Semestre
            key={indice}
            materias={semestre}
            numSemestre={indice + 1}
            tec21={planDeEstudios.tec21}
            colorSeleccionado={colorSeleccionado}
          />
        ))}
      </Row>
    </Container>
  )
}
