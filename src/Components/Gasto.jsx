import React from 'react'
import { formatearFecha } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripcion from '../img/icono_suscripciones.svg'

const diccionarioIconodos = {
    ahorro: IconoAhorro,
    comida: IconoCasa,
    casa: IconoCasa,
    gastosVarios: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripcion,
}

const Gasto = ({gasto}) => {
  return (
    
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img 
            src={diccionarioIconodos[gasto.categoria]}
            alt='icono'
            />


            <div className='descripcion-gasto'>
                <p className='categoria'>{gasto.categoria}</p>
                <p className='nombre-gasto'>{gasto.nombre}</p>
                <p className='fecha-gasto'>
                    Agregado el: {''}
                    <span>{formatearFecha(gasto.fecha)}</span>
                </p> 
            </div>
        </div>
        <p className='cantidad-gasto'>${gasto.cantidad}</p>
    </div>
  )
}

export default Gasto