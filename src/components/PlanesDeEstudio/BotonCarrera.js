import React from 'react'

export default function BotonCarrera(props) {
    const { boton } = props;
    const { nombre, id } = boton;

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary btn-lg selectStudyPlan"
                value={id}
            >
                {nombre}
            </button>
        </div>
    )
}
