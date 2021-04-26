import React from 'react'
import { ProgressBar } from 'react-bootstrap';

/** Barra para indicar el porcentaje de los distintos colores en el plan de estudios. **/
export default function BarrasDeProgreso({ listaColores, cantMateriasPorColor, totalMaterias }) {
  return (
    <ProgressBar className="m-0 barra-progreso">
      {listaColores.map((color, indice) => {
        let cant = (cantMateriasPorColor[color.nombre] / totalMaterias * 100).toFixed(2) || 0;
        return (
          <ProgressBar
            // striped
            className={`bg-${color.nombre} barra`}
            now={cant}
            label={`${cant}%`}
            key={indice}
          />  
        )
      })}
    </ProgressBar>
  )
}
