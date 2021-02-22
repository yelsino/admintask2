import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        {
            nombre: 'tienda virtual'
        },
        {
            nombre: 'sitio virtual'
        },
        {
            nombre: 'opera virtual'
        },
    ]

    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    )
}

export default ListadoProyectos