import React, { useReducer } from 'react';
import { AGREGAR_PROYECTO, ELIMINAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ERROR, PROYECTO_ACTUAL, VALIDAR_FORMULARIO } from '../../types';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {



    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
        mensaje: null
    }

    // d dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    return (
        <proyectoContext.Provider
            value={{

            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}


export default ProyectoState;