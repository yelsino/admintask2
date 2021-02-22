import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { id: 1, nombre: 'elejir plataforma', estado: true },
        { id: 2, nombre: 'elejir plataforma', estado: false },
        { id: 3, nombre: 'elejir plataforma', estado: true },
        { id: 4, nombre: 'elejir plataforma', estado: false }
    ]

    return (
        <Fragment>
            <h2>Proyecto: </h2>

            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0
                        ? (<li className='tarea'>No hay tareas</li>)
                        :
                        tareasProyecto.map(tarea => (
                            <Tarea
                                key={tarea.id}
                                tarea={tarea}
                            />
                        ))

                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
};

export default ListadoTareas;
