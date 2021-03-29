import React from 'react'

export default function BotonCarrera(props) {
    const { carrera } = props;
    const { nombre, clave } = carrera;

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary btn-lg selectStudyPlan"
                value={clave}
            >
                {nombre}
            </button>
        </div>
    )
}
