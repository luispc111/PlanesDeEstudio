import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <div
      className={`boton-color bg-${color} ${(color === colorSeleccionado) ? 'boton-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color)}
    />
  )
}
/** Bloque de una materia individual **/
const Materia = ({ nombre, tec21, colorSeleccionado, colorSemestre, cambiarColorSemestre, semestreClickeado, cambiarCantMaterias }) => {
  const [colorDeFondo, setColorDeFondo] = useState('orange');

  useEffect(() => {
    if (semestreClickeado) {
      setColorDeFondo(colorSemestre);
    }
  }, [colorSemestre])

  const click = () => {
    cambiarCantMaterias(colorDeFondo, colorSeleccionado);
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

/** Lista de materias con bloque que define qué semestre es **/
const Semestre = ({ materias, numSemestre, tec21, colorSeleccionado, listaColores }) => {
  const [colorDeFondo, setColorDeFondo] = useState('orange');
  const [clickeado, setClickeado] = useState(false);
  const [cantMateriasPorColor, setCantMateriasPorColor] = useState([]);

  useEffect(() => {
    let colores = {};

    listaColores.forEach(color => {
      colores[color] = 0
    });

    colores['orange'] = materias.length;

    setCantMateriasPorColor(colores);
  }, []);

  useEffect(() => {
    setClickeado(false);
  }, [clickeado])

  useEffect(() => {
    Object.keys(cantMateriasPorColor).forEach(color => {
      if (cantMateriasPorColor[color] == materias.length) {
        setColorDeFondo(color);
      }
    });
  }, [cantMateriasPorColor])

  const botonClickeado = () => {
    setColorDeFondo(colorSeleccionado)
    setClickeado(true);
  }

  const cambiarCantMaterias = (colorPasado, colorNuevo) => {
    console.log('aaaaaa')
    let colores = cantMateriasPorColor;
    cantMateriasPorColor[colorPasado] -= 1;
    cantMateriasPorColor[colorNuevo] += 1;
    setCantMateriasPorColor(colores);
  }

  return (
    <Col className="semestre m-0 p-0">
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
          cambiarCantMaterias={cambiarCantMaterias}
        />
      ))}
    </Col>
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
        <h2 className="titulo-tabla">
          Plan de estudios {planDeEstudios.nombre}
        </h2>
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
