import React from "react";
import { render } from '@testing-library/react';

import BotonesDeColor from "./BotonesDeColor";

const colores = ["orange", "green", "blue", "purple", "pink", "red", "teal"];

it("renderiza los botones de colores", () => {

  const { container } = render(<BotonesDeColor
                                  colores={colores}
                                  cambiarColorSeleccionado={jest.fn()}
                                  colorSeleccionado={'orange'}
                                />);



  const orange = container.querySelector('.bg-orange.boton-color-seleccionado');
  expect(orange).toBeInTheDocument();

  const green = container.querySelector('.bg-green');
  expect(green).toBeInTheDocument();

  const blue = container.querySelector('.bg-blue');
  expect(blue).toBeInTheDocument();

  const purple = container.querySelector('.bg-purple');
  expect(purple).toBeInTheDocument();

  const pink = container.querySelector('.bg-pink');
  expect(pink).toBeInTheDocument();

  const red = container.querySelector('.bg-red');
  expect(red).toBeInTheDocument();

  const teal = container.querySelector('.bg-teal');
  expect(teal).toBeInTheDocument();
});
