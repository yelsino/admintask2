import React from 'react';
import { useState } from "react"

const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    })

    const onchangeInicio = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <div className='form-usuario'>

            <div className='contenedor-form sombra-dark'>
                <h1>Crear Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='nombre de usuario'
                            value='nombre'
                            onChange={onchangeInicio}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='tu email'
                            value='email'
                            onChange={onchangeInicio}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='tu password'
                            value='password'
                            onChange={onchangeInicio}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Conformar Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='repite tu contraseña'
                            value='confirmar'
                            onChange={onchangeInicio}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrarme'
                        />
                    </div>

                </form>

            </div>
        </div>

    )
}

export default NuevaCuenta;