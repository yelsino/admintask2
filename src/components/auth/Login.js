import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    const { email, password } = usuario

    const onChange = (e) => {
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
                <h1>Iniciar Sesion</h1>

                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='tu email'
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Email</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='tu password'
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='iniciar Sesion'
                        />

                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>

            </div>

        </div>
    );
}

export default Login;