const Login = () => {

    const onChange = () => {

    }

    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesion</h1>

                <form>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
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
            </div>

        </div>
     );
}
 
export default Login;