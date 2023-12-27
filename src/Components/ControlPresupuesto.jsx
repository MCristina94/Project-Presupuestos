import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatear = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD' 
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatear(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span> {formatear(presupuesto)}
            </p>

            <p>
                <span>Gastado: </span> {formatear(presupuesto)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto