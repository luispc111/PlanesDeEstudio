import React from 'react';
import { Col, Row } from 'react-bootstrap';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <div
      className={`boton-color bg-${color} ${(color === colorSeleccionado) ? 'boton-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color)}
    />
  )
}

/** Lista de colores **/
export default function BotonesDeColor({ colores, cambiarColorSeleccionado, colorSeleccionado }) {
  return (
    <Row className="mt-4" lg={6}>
      {colores.map((color, indice) => (
        <Col key={indice}>
          <BotonDeColor
            color={color}
            cambiarColorSeleccionado={cambiarColorSeleccionado}
            colorSeleccionado={colorSeleccionado}
          />
        </Col>
      ))}
    </Row>
  )
}
