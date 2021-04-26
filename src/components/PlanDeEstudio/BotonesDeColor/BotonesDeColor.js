import React from 'react';
import { Row, Col } from 'react-bootstrap';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <Col
      xs={6}
      sm={4}
      md={2}
      className={`m-0 bg-${color.nombre} boton-color${(color.nombre === colorSeleccionado) ? '-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color.nombre)}
    >
      {color.tag}
    </Col>
  )
}

/** Lista de colores que se pueden colocar en cada materia del plan de estudios **/
export default function BotonesDeColor({ colores, cambiarColorSeleccionado, colorSeleccionado }) {
  return (
    <Row className="mt-4 p-0">
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
