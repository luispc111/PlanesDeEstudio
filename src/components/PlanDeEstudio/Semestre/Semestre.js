import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

import Materia from './Materia/Materia';

/** Lista de materias con bloque que define qué semestre es **/
export default function Semestre ({ numSemestre, materias, tec21, colorSeleccionado, clicks }) {
  const [colorDeFondo, setColorDeFondo] = useState('orange');

  const { clickSemestre, clickMateria } = clicks;

  const botonClickeado = () => {
    clickSemestre(numSemestre);
    setColorDeFondo(colorSeleccionado);
  }

  // Se actualiza el color del boton del semestre
  useEffect(() => {
    // Este if es para colorear el semestre de naranja por si alguna materia se pintó de otro color cuando todas estaban del mismo color
    if (colorDeFondo !== 'orange') {
      materias.forEach(materia => {
        if (materia.color !== colorDeFondo) {
          setColorDeFondo('orange');
          return;
        }
      });
    } 
    // Este else es para colorear el semestre del color de todas las materias cuando todas están del mismo color
    else {
      let color = materias[0].color;
      let cambiarColor = true;

      materias.forEach(materia => {
        if (materia.color !== color) {
          cambiarColor = false;
        }
      });

      if (cambiarColor) {
        setColorDeFondo(color);
      }
    }
  }, [materias, colorDeFondo]);

  return (
    <Col xs={4} md className="semestre m-0 p-0 mb-4">
      <div className={`materia bg-${colorDeFondo}`} onClick={() => botonClickeado()}><label>Semestre {numSemestre + 1}</label></div>
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
