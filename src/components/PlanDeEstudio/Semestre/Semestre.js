import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import Materia from './Materia/Materia';

/** Lista de materias con bloque que define qué semestre es **/
export default function Semestre ({ materias, numSemestre, tec21, colorSeleccionado, listaColores }) {
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
    <Col xs={4} md className="semestre m-0 p-0 mb-4">
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
