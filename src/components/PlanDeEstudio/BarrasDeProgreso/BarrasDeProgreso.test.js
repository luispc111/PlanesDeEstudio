import React from "react";
import { render } from '@testing-library/react';

import BarrasDeProgreso from "./BarrasDeProgreso";

const colores = ["orange", "green", "blue", "purple", "pink", "red", "teal"];
const cantMateriasPorColor = [
  { orange: 10, green: 0, blue: 0, purple: 0, pink: 0, red: 0, teal: 0 },
  { orange: 2, green: 3, blue: 4, purple: 1, pink: 0, red: 0, teal: 0 },
];

it("renderiza las barras de progreso", () => {

  const { container, getByText } = render(<BarrasDeProgreso
                                            listaColores={colores}
                                            cantMateriasPorColor={cantMateriasPorColor[0]}
                                            totalMaterias={10}
                                          />);

  const orange = container.querySelector('.bg-orange');
  expect(orange).toBeInTheDocument();
  expect(getByText(/100.00%/i)).toBeInTheDocument();

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

it("renderiza las barras de progreso con porcentajes diferentes", () => {

  const { container, getByText } = render(<BarrasDeProgreso
                                            listaColores={colores}
                                            cantMateriasPorColor={cantMateriasPorColor[1]}
                                            totalMaterias={10}
                                          />);

  const orange = container.querySelector('.bg-orange');
  expect(orange).toBeInTheDocument();
  expect(getByText(/20.00%/i)).toBeInTheDocument();

  const green = container.querySelector('.bg-green');
  expect(green).toBeInTheDocument();
  expect(getByText(/30.00%/i)).toBeInTheDocument();

  const blue = container.querySelector('.bg-blue');
  expect(blue).toBeInTheDocument();
  expect(getByText(/40.00%/i)).toBeInTheDocument();

  const purple = container.querySelector('.bg-purple');
  expect(purple).toBeInTheDocument();
  expect(getByText(/10.00%/i)).toBeInTheDocument();

  const pink = container.querySelector('.bg-pink');
  expect(pink).toBeInTheDocument();

  const red = container.querySelector('.bg-red');
  expect(red).toBeInTheDocument();

  const teal = container.querySelector('.bg-teal');
  expect(teal).toBeInTheDocument();
});
