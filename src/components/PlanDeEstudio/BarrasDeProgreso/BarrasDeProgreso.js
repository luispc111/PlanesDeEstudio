import React from 'react'
import { ProgressBar } from 'react-bootstrap';

export default function BarrasDeProgreso({ cantMateriasPorColor, totalMaterias }) {
  return (
    <ProgressBar className="m-0 barra-progreso">
      {Object.keys(cantMateriasPorColor).map(function(color, indice){
        return (
          <ProgressBar
            // striped
            className={`bg-${color}`}
            now={((cantMateriasPorColor[color]) ? ((cantMateriasPorColor[color]) / totalMaterias * 100) : 0)}
            label={`${(((cantMateriasPorColor[color]) ? (cantMateriasPorColor[color] / totalMaterias * 100) : 0)).toFixed(2)}%`}
            key={indice} />  
        )
      })}
    </ProgressBar>
  )
}
