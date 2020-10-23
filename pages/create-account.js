import React, {Fragment, useState} from 'react';
import Router from 'next/router';
import {css} from '@emotion/core';
import Layout from '../components/layout/Layout';

import {Formulario, Campo, InputSubmit, Error} from '../components/UI/Formulario';

//Validations
import useValidation from'../hooks/useValidation';
import validateCreateAccount from '../validation/validateCreateAccount';

import firebase from '../firebase';


const STATE_INITIAL={
    username:'',
    email:'',
    password:''
}
const CreateAccount = () => {

    const [errorlogin, saveError]=useState(false);
    const {
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    }=useValidation(STATE_INITIAL, validateCreateAccount, createAccount);
    const {username, email, password}=values;
    
    async function createAccount(){
        try{
            await firebase.registrar(username, email, password);
            Router.push('/');
        }catch(error){
            console.error('hubo un error');
            saveError(error.message);
        }
    }
    return (
        <div>
            <Layout>
                <h1
                css={css`
                    text-align:center;
                    margin-top:5rem;
                `}> Crear Cuenta </h1>
                <Fragment>
                <Formulario
                onSubmit={handleSubmit}
                noValidate
                >
                    <Campo>
                        <label htmlFor="username">Nombre</label>
                        <input 
                            type="text"
                            id="username"
                            placeholder="Tu nombre"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Campo>
                    {errors.username && <Error>{errors.username}</Error>}
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
                        value="Crear cuenta"
                        />
                </Formulario>
                </Fragment>
            </Layout>
        </div> 
     );
}
 
export default CreateAccount;