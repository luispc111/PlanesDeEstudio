import React from 'react'
import { Button } from 'react-bootstrap';

export default function BotonCarrera(props) {
    const { carrera } = props;
    const { nombre, clave } = carrera;

    return (
        <Button 
            variant="primary"
            value={clave}
        >
            {nombre}    
        </Button>
    )
}
