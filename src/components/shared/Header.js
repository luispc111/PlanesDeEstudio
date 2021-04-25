import React from 'react'

/**
 * Parte superior, contiene controles de manejo de sesión y perfil
 * 
 * @param {Boolean} sesionIniciada Indica si el usuario ingresa como previamente registrado.
 */
export default function Header({ sesionIniciada }) {
    return (
        <div class="header">
            <div class="header-left">
                <a href="" class="element">Planes de Estudio</a>
            </div>
            <div class="header-right">
                {sesionIniciada && (<a href="" class="element">Ver perfil <img src="https://i.stack.imgur.com/l60Hf.png" class="rounded-circle profile-image"></img></a>)}
                {!sesionIniciada && (<a href="" class="element">Iniciar sesión</a>)}
            </div>
        </div>
    )
}
