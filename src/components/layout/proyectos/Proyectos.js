import React from 'react';
import Barra from '../Barra';
import Sidebar from "../Sidebar";
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTarea';

const Proyectos = () => {
    return (
        <div className='contenedor-app'>

            <Sidebar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                    <FormTarea />
                    <div className='contenedor-tareas'>
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;