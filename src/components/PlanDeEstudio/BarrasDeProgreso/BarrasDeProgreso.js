import React from 'react'
import { ProgressBar } from 'react-bootstrap';

export default function BarrasDeProgreso({ listaColores, cantMateriasPorColor, totalMaterias }) {
  return (
    <ProgressBar className="m-0 barra-progreso">
      {listaColores.map((color, indice) => {
        let cant = (cantMateriasPorColor[color] / totalMaterias * 100).toFixed(2) || 0;
        return (
          <ProgressBar
            // striped
            className={`bg-${color}`}
            now={cant}
            label={`${cant}%`}
            key={indice}
          />  
        )
      })}
    </ProgressBar>
  )
}
