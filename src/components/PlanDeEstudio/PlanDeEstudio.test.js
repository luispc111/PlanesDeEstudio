import React from "react";
import { render } from '@testing-library/react';

import PlanDeEstudio from "./PlanDeEstudio";
import { MemoryRouter } from "react-router";

const componente = <MemoryRouter initialEntries={["/plan/itc_11"]}> <PlanDeEstudio /> </MemoryRouter>

it("renderiza la vista del plan de estudios", () => {
  const { getByText } = render(componente);

  expect(getByText(/Plan de Estudios ITC 11/i)).toBeInTheDocument();
});

it("renderiza un semestre", () => {
  const { getByText } = render(componente);

  expect(getByText(/Semestre 1/)).toBeInTheDocument();
});

it("renderiza una materia", () => {
  // Para cuando tengamos el front conectado con el back
  // const { getByText } = render(componente);
  // expect(getByText(/Estructura de Datos/)).toBeInTheDocument();
  
  const { getAllByText } = render(componente);
  expect(getAllByText(/Estructura de Datos/)[0]).toBeInTheDocument();
});

it("renderiza los botones de colores", () => {
  const { container } = render(componente);

  const orange = container.querySelector('.bg-orange.boton-color');
  expect(orange).toBeInTheDocument();

  const green = container.querySelector('.bg-green.boton-color-seleccionado');
  expect(green).toBeInTheDocument();
});

it("renderiza las barras de progreso", () => {
  const { container, getByText } = render(componente);

  const orange = container.querySelector('.barra.bg-orange');
  expect(orange).toBeInTheDocument();
  expect(getByText(/100.00%/i)).toBeInTheDocument();

  const green = container.querySelector('.barra.bg-green');
  expect(green).toBeInTheDocument();

  const blue = container.querySelector('.barra.bg-blue');
  expect(blue).toBeInTheDocument();

  const purple = container.querySelector('.barra.bg-purple');
  expect(purple).toBeInTheDocument();

  const pink = container.querySelector('.barra.bg-pink');
  expect(pink).toBeInTheDocument();

  const red = container.querySelector('.barra.bg-red');
  expect(red).toBeInTheDocument();

  const teal = container.querySelector('.barra.bg-teal');
  expect(teal).toBeInTheDocument();
});
