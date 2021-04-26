import React from 'react';
import { Row } from 'react-bootstrap';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <div
      className={`m-1 bg-${color.nombre} boton-color${(color.nombre === colorSeleccionado) ? '-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color.nombre)}
    />
  )
}

/** Lista de colores que se pueden colocar en cada materia del plan de estudios **/
export default function BotonesDeColor({ colores, cambiarColorSeleccionado, colorSeleccionado }) {
  return (
    <Row className="mt-4">
      {colores.map((color, indice) => (
        <BotonDeColor
          color={color}
          key={indice}
          cambiarColorSeleccionado={cambiarColorSeleccionado}
          colorSeleccionado={colorSeleccionado}
        />
      ))}
    </Row>
  )
}
