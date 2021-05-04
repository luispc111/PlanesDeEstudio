import React from "react";
import { render, fireEvent  } from '@testing-library/react';

import BotonesDeColor from "./BotonesDeColor";

const colores = [
  { nombre: "orange", tag: 'Incompleto' },
  { nombre: "green",  tag: 'Completo'   },
  { nombre: "blue",   tag: 'Semestre-1' },
  { nombre: "purple", tag: 'Semestre-2' },
  { nombre: "pink",   tag: 'Semestre-3' },
  { nombre: "red",    tag: 'Semestre-4' },
  { nombre: "teal",   tag: 'Semestre-5' }
];

it("renderiza los botones de colores", () => {

  const { container, getByText } = render(<BotonesDeColor
                                  colores={colores}
                                  cambiarColores={jest.fn()}
                                  cambiarColorSeleccionado={jest.fn()}
                                  colorSeleccionado={'orange'}
                                />);


  const orange = container.querySelector('.bg-orange.boton-color-seleccionado');
  expect(orange).toBeInTheDocument();
  expect(getByText(/Incompleto/)).toBeInTheDocument();

  const green = container.querySelector('.bg-green.boton-color');
  expect(green).toBeInTheDocument();
  expect(getByText(/Completo/)).toBeInTheDocument();

  const blue = container.querySelector('.bg-blue.boton-color');
  expect(blue).toBeInTheDocument();
  expect(getByText(/Semestre-1/)).toBeInTheDocument();

  const purple = container.querySelector('.bg-purple.boton-color');
  expect(purple).toBeInTheDocument();
  expect(getByText(/Semestre-2/)).toBeInTheDocument();

  const pink = container.querySelector('.bg-pink.boton-color');
  expect(pink).toBeInTheDocument();
  expect(getByText(/Semestre-3/)).toBeInTheDocument();

  const red = container.querySelector('.bg-red.boton-color');
  expect(red).toBeInTheDocument();
  expect(getByText(/Semestre-4/)).toBeInTheDocument();

  const teal = container.querySelector('.bg-teal.boton-color');
  expect(teal).toBeInTheDocument();
  expect(getByText(/Semestre-5/)).toBeInTheDocument();

  expect(getByText(/Editar colores/)).toBeInTheDocument();
});

it("Se cambia el color seleccionado", () => {

  const { container } = render(<BotonesDeColor
                                  colores={colores}
                                  cambiarColores={jest.fn()}
                                  cambiarColorSeleccionado={jest.fn()}
                                  colorSeleccionado={'orange'}
                                />);


  const boton = container.querySelector('.bg-purple.boton-color');
  // fireEvent.click(boton);
  fireEvent.click(boton, { button: 2 })
  expect(boton.className).toEqual('text-center m-0 bg-purple boton-color col-md-2 col-sm-4 col-6')
});
