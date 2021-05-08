import React from "react";
import { render, fireEvent  } from '@testing-library/react';

import BotonesDeColor from "./BotonesDeColor";

const colores = [
  { color: "#BF7913", nombre: 'Incompleto' },
  { color: "#439630", nombre: 'Completo'   },
  { color: "#C14B4C", nombre: 'Semestre-1' },
  { color: "#2653AD", nombre: 'Semestre-2' },
  { color: "#633B8D", nombre: 'Semestre-3' },
  { color: "#B02828", nombre: 'Semestre-4' },
  { color: "#008080", nombre: 'Semestre-5' }
];

it("renderiza los botones de colores", () => {

  const { container, getByText } = render(<BotonesDeColor
                                  colores={colores}
                                  cambiarColores={jest.fn()}
                                  cambiarColorSeleccionado={jest.fn()}
                                  colorSeleccionado={0}
                                />);

  expect(getByText(/Incompleto/)).toBeInTheDocument();
  expect(getByText(/Completo/)).toBeInTheDocument();
  expect(getByText(/Semestre-1/)).toBeInTheDocument();
  expect(getByText(/Semestre-2/)).toBeInTheDocument();
  expect(getByText(/Semestre-3/)).toBeInTheDocument();
  expect(getByText(/Semestre-4/)).toBeInTheDocument();
  expect(getByText(/Semestre-5/)).toBeInTheDocument();
  // const otros = container.querySelectorAll('.bg-teal.boton-color');
  // expect(teal).toBeInTheDocument();

  expect(getByText(/Editar colores/)).toBeInTheDocument();
});

// it("Se cambia el color seleccionado", () => {

//   const { container } = render(<BotonesDeColor
//                                   colores={colores}
//                                   cambiarColores={jest.fn()}
//                                   cambiarColorSeleccionado={jest.fn()}
//                                   colorSeleccionado={1}
//                                 />);


//   const boton = container.querySelector('.bg-purple.boton-color');
//   // fireEvent.click(boton);
//   fireEvent.click(boton, { button: 2 })
//   expect(boton.className).toEqual('text-center m-0 bg-purple boton-color col-md-2 col-sm-4 col-6')
// });
