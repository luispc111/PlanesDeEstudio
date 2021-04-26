import React from 'react';
import { Row, Col } from 'react-bootstrap';

/** Bloque de una materia individual **/
export default function Materia ({ nums, materia, tec21, clickMateria }) {
  const {numSemestre, numMateria} = nums

  return (
    <div className={`materia labelMateria bg-${materia.color}`} onClick={() => clickMateria(numSemestre, numMateria)}>
      <Row >
        <Col>
          <label>{materia.nombre}</label>
        </Col>
      </Row>
      {tec21 && (
        <Row className="tec21 p-0 m-0">
          <Col className={`bloque-tec21-${(materia?.periodos[0]) ? '' : 'no-'}coloreado p-0 m-0`}></Col>
          <Col className={`bloque-tec21-${(materia?.periodos[1]) ? '' : 'no-'}coloreado p-0 m-0`}></Col>
          <Col className={`bloque-tec21-${(materia?.periodos[2]) ? '' : 'no-'}coloreado p-0 m-0`}></Col>
        </Row>
      )}
    </div>
  )
}
