import React, { useContext, useEffect } from 'react';

const Barra = () => {


    useEffect(() => {
        // eslint-disable-next-line
    }, [])

    return (
        <header className='app-header'>
            <p className='nombre-usuario'>
                Hola
                </p>

            <nav className='nav-principal'>
                <button
                    className='btn btn-blank cerrar-sesion'
                >Cerrar Sesion</button>
            </nav>
        </header>
    );
}

export default Barra;