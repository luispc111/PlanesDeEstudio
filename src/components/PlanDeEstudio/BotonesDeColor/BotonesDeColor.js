import React from 'react';
import { Col, Row } from 'react-bootstrap';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <div
      className={`m-1 bg-${color} boton-color${(color === colorSeleccionado) ? '-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color)}
    />
  )
}

/** Lista de colores **/
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
