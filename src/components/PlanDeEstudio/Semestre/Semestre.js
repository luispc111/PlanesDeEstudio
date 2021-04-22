import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

import Materia from './Materia/Materia';

/** Lista de materias con bloque que define qué semestre es **/
export default function Semestre ({ numSemestre, materias, tec21, colorSeleccionado, clicks }) {
  const [colorDeFondo, setColorDeFondo] = useState('orange');

  const { clickSemestre, clickMateria } = clicks;

  const botonClickeado = () => {
    clickSemestre(numSemestre)
    setColorDeFondo(colorSeleccionado)
  }

  return (
    <Col xs={4} md className="semestre m-0 p-0 mb-4">
      <div className={`materia labelMateria bg-${colorDeFondo}`} onClick={() => botonClickeado()}><label>Semestre {numSemestre + 1}</label></div>
      {materias.map((materia, indice) => (
        <Materia
          key={indice}
          nums={{numSemestre, numMateria: indice}}
          materia={materia}
          tec21={tec21}
          clickMateria={clickMateria}
        />
      ))}
    </Col>
  )
}
