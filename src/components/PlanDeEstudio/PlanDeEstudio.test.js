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

  const green = container.querySelector('.boton-color');
  expect(green).toBeInTheDocument();
});

it("renderiza las barras de progreso", () => {
  const { container, getByText } = render(componente);

  expect(getByText(/100.00%/i)).toBeInTheDocument();
});
