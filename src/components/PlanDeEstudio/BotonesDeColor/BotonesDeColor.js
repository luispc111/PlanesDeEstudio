import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { SliderPicker as Picker} from 'react-color';

/** Input para cambiar el valor hexadecimal y el tag de un color **/
function ColorInput({ color, actualizarNombre, actualizarColor, borrarColor, indice }) {
  return (
    <Row className="mt-5 mb-3">
      <Col xs={5}>
        <Picker
          color={ color.color }
          onChangeComplete={(c) => actualizarColor(c.hex, indice) }
        />
      </Col>
      <Col xs={5}>
        <InputGroup>
          <FormControl
            placeholder="Tag Color"
            value={color.nombre}
            onChange={(e) => actualizarNombre(indice, e.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
      <Col xs={1}>
        <Button variant="danger" onClick={() => borrarColor(color)}> Borrar </Button>
      </Col>
    </Row>
  )
}

/** Modal donde puedes ver la lista de todos los colores y modificarlos **/
function ModalColores({ show, onHide, colores, cambiarColores }) {
  const [listaColores, setListaColores] = useState(colores);

  const guardarColores = () => {
    cambiarColores(listaColores);
    onHide();
  }

  const actualizarNombre = (color, tag) => {
    let cols = JSON.parse(JSON.stringify(listaColores));
    cols[color].nombre = tag;
    setListaColores(cols);
  }

  const actualizarColor = (color, indice) => {
    let cols = JSON.parse(JSON.stringify(listaColores));
    cols[indice].color = color;
    setListaColores(cols);
  }

  const cerrarModal = () => {
    setListaColores(colores);
    onHide();
  }

  const crearColor = () => {
    const color = {
      color: '#439630',
      nombre: 'Color Nuevo'
    }

    let cols = JSON.parse(JSON.stringify(listaColores));
    cols.push(color);
    setListaColores(cols);
  }

  const borrarColor = (color) => {
    setListaColores(listaColores.filter(col => col != color));
  }

  useEffect(() => {
    setListaColores(colores);
  }, [colores])

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
          {listaColores.map((color, index) => (
            <ColorInput
              key={index}
              color={color}
              actualizarNombre={actualizarNombre}
              actualizarColor={actualizarColor}
              indice={index}
              borrarColor={borrarColor}
            />
          ))}
          <Button variant="info" onClick={crearColor}>Agregar Color</Button>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-bg">
        <Button variant="danger" onClick={cerrarModal}>Cerrar</Button>
        <Button onClick={guardarColores}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ indice, color, cambiarColorSeleccionado, colorSeleccionado }) => {
  return (
    <Col
      xs={6}
      sm={4}
      md={1}
      className={`text-center m-0 boton-color${(indice === colorSeleccionado) ? '-seleccionado' : ''}`}
      style={{backgroundColor: color.color}}
      onClick={() => cambiarColorSeleccionado(indice)}
    >
      {color.nombre}
    </Col>
  )
}

/** Lista de colores que se pueden colocar en cada materia del plan de estudios **/
export default function BotonesDeColor({ colores, cambiarColores, cambiarColorSeleccionado, colorSeleccionado }) {
  const [modalShow, setModalShow] = useState(false);

  const esconder = () => {
    setModalShow(false)
  }

  return (
    <>
      <Col md={1} className="mt-4 mb-4">
        <Button variant="info" onClick={() => setModalShow(true)}>
          Editar colores
        </Button>
        <ModalColores
          show={modalShow}
          onHide={esconder}
          colores={colores}
          cambiarColores={cambiarColores}
        />
      </Col>
      <Col md={10} className="m-0 p-0">
        <Row className="m-0 p-0">
          {colores.map((color, indice) => (
            <BotonDeColor
              key={indice}
              indice={indice}
              color={color}
              cambiarColorSeleccionado={cambiarColorSeleccionado}
              colorSeleccionado={colorSeleccionado}
            />
          ))}
        </Row>
      </Col>
    </>
  )
}
