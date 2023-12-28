import React, { useEffect, useState } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos, setGastos, setPresupuesto, setIsValidPresupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => {
           const cantidadNumerica = parseInt(gasto.cantidad);
            return cantidadNumerica + total;
        }, 0);
        const totalDisponible = presupuesto - totalGastado;
        
        //calcular porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto) * 100).toFixed(2);
                
        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
        setPorcentaje(nuevoPorcentaje);
        }, 1500)
    },[gastos]);

    const formatear = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD' 
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reinicir presupuesto y gastos?')
        if(resultado){
            setGastos([]);
            setPresupuesto('');
            setIsValidPresupuesto(false);
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6', 
                    trailColor: '#f5f5f5',
                    textColor: porcentaje > 100 ? '#dc2626' : '#3b82f6'
                })}
                value={porcentaje}
                text = {`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button 
                className='reset-app' 
                type='button'
                onClick={handleResetApp}>
                    Resetear App
            </button>
            <p>
                <span>Presupuesto: </span> {formatear(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Disponible: </span> {formatear(disponible)}
            </p>

            <p>
                <span>Gastado: </span> {formatear(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto