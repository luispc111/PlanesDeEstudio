import React from 'react'
import { ProgressBar } from 'react-bootstrap';

export default function BarrasDeProgreso({ listaColores }) {
  return (
    <ProgressBar className="m-0 barra-progreso">
      {listaColores.map((color, indice) => (
        <ProgressBar
          // striped
          className={`bg-${color}`}
          now={(100 / listaColores.length)}
          label={`${(100 / listaColores.length).toFixed(2)}%`}
          key={indice} />  
      ))}
    </ProgressBar>
  )
}
