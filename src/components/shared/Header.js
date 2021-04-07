import React from 'react'

export default function Header({ sesionIniciada }) {
    return (
        <div class="header">
            <div class="header-left">
                <a href="" class="element">Planes de Estudio</a>
            </div>
            <div class="header-right">
                {sesionIniciada && (<a href="" class="element">Perfil</a>)}
                {!sesionIniciada && (<a href="" class="element">Iniciar sesión</a>)}
            </div>
        </div>
    )
}
