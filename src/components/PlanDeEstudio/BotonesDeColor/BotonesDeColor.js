import React, { useState } from 'react';
import { Row, Col, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

function ColorInput({ color, actualizarColor }) {
  return (
    <Row className="mt-3 mb-3">
      <Col xs={1}>
        <div className={`cuadrado-color bg-${color.nombre}`}></div>
      </Col>
      <Col>
        <InputGroup>
          <FormControl
            placeholder="Tag Color"
            value={color.tag}
            onChange={(e) => actualizarColor(color.nombre, e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
    </Row>
  )
}

function ModalColores({ show, onHide, colores, cambiarColores }) {
  const [listaColores, setListaColores] = useState(colores);

  const guardarColores = () => {
    cambiarColores(listaColores);
    onHide();
  }

  const actualizarColor = (color, tag) => {
    setListaColores(listaColores.map(col => {
      if (col.nombre === color) {
        return { nombre: color, tag: tag};
      } else {
        return col;
      }
    }));
  }

  const cerrarModal = () => {
    setListaColores(colores);
    onHide();
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-bg" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Colores
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-bg">
        <div>
          {listaColores.map((color, index) => (<ColorInput key={index} color={color} actualizarColor={actualizarColor} />))}
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-bg">
        <Button onClick={cerrarModal}>Cerrar</Button>
        <Button onClick={guardarColores}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <Col
      xs={6}
      sm={4}
      md={2}
      className={`text-center m-0 bg-${color.nombre} boton-color${(color.nombre === colorSeleccionado) ? '-seleccionado' : ''}`}
      onClick={() => cambiarColorSeleccionado(color.nombre)}
    >
      {color.tag}
    </Col>
  )
}

/** Lista de colores que se pueden colocar en cada materia del plan de estudios **/
export default function BotonesDeColor({ colores, cambiarColores, cambiarColorSeleccionado, colorSeleccionado }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Row className="mt-4 m-0 p-0">
      <Col md={1} className="mt-4 mb-4">
        <Button variant="info" onClick={() => setModalShow(true)}>
          Editar colores
        </Button>
        <ModalColores
          show={modalShow}
          onHide={() => setModalShow(false)}
          colores={colores}
          cambiarColores={cambiarColores}
        />
      </Col>
      <Col md={11}>
        <Row className="m-0 p-0">
          {colores.map((color, indice) => (
            <BotonDeColor
              color={color}
              key={indice}
              cambiarColorSeleccionado={cambiarColorSeleccionado}
              colorSeleccionado={colorSeleccionado}
            />
          ))}
        </Row>
      </Col>
    </Row>
  )
}
