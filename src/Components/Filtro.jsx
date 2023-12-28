import React from 'react'

const Filtro = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label> Filtrar Gastos</label>
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="">--Todas las categorías--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastosVarios">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Subscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtro