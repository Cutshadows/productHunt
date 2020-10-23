import React, {Fragment, useState} from 'react';
import {css} from '@emotion/core';
import Layout from '../components/layout/Layout';

import {Formulario, Campo, InputSubmit, Error} from '../components/UI/Formulario';

//Validations
import useValidation from'../hooks/useValidation';
import validateLogin from '../validation/validateLogin';


const STATE_INITIAL={
    email:'',
    password:''
}
const Login = () => {

    const [errorlogin, saveError]=useState(false);
    const {
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    }=useValidation(STATE_INITIAL, validateLogin, authLogin);
    const {email, password}=values;
    function authLogin(){
        console.log("authLogin")
        //saveError('Hola mundo')
    }

    return ( 
        <div>
            <Layout>
                <h1
                css={css`
                    text-align:center;
                    margin-top:5rem;
                `}> Iniciar Sesión </h1>
                <Fragment>
                <Formulario
                onSubmit={handleSubmit}
                noValidate
                >
                    <Campo>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Tu email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </Campo>
                    {errors.email && <Error>{errors.email}</Error>}
                    <Campo>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Tu password"
                            name="password"
                            autoComplete="new-password" 
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </Campo>
                    
                    {errors.password && <Error>{errors.password}</Error>}
                    
                    {errorlogin && <Error>{errorlogin}</Error>}
                    
                    <InputSubmit 
                        type="submit"
                        value="Ingresar"
                        />
                </Formulario>
                </Fragment>
            </Layout>
        </div> 

     );
}
 
export default Login;