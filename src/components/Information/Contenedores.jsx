import React from 'react'
import './Encabezado.css'


function Contenedores({titulo,descripcion,icono}) {
  return (
    <div className={"contenedor hover:text-white "}>
        {icono}
        <h1 className='text-2xl neon-text text-amber-500 hover:text-white'>{titulo}</h1>
        <p className='text-justify text-white transition-colors hover:text-black ' >{descripcion}</p>
    </div>
  )
}
export default Contenedores