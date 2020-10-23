import React, { Fragment } from 'react';
import Buscador from '../UI/Buscador';
import Navegation from './Navegation';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Button from '../UI/Button';





const ContainerHeader=styled.div`
    max-width:1200px;
    width:95%;
    margin:0 auto;
    @media (min-width:768px) {
        display:flex;
        justify-content:space-between;    
    }
`;
const Logo=styled.p`
    color: var(--orange);
    font-size:4rem;
    line-height:0;
    font-weight:700;
    font-family:'Roboto Slab', serif;
    margin-right:2rem;
    :hover{
        color: var(--gris);
    }
`;

const Header = () => {
     const usuario=false;
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <ContainerHeader>
                <div css={css`
                        display:flex;
                        align-items:center;    
                    `}
                >
                    <Link href="/"> 
                        <Logo>P</Logo>
                    </Link>
                    <Buscador />
                    <Navegation />
                </div>
                <div
                css={css`
                    display:flex;
                    align-items:center;
                `}
                >
                    {usuario?(
                        <Fragment>
                        <p
                        css={css`
                            margin-right: 2rem;
                        `} 
                        >Hola: Douglas</p>
                        
                        <Button 
                            bgColor="true">
                            Cerrar Sesion
                        </Button>
                        </Fragment>
                        
                    ):(
                        <Fragment>
                        <Link href="/Login">
                            <Button
                                bgColor="true"

                                >Login</Button>
                        </Link>
                        <Link href="/create-account">
                            <Button>
                                Crear cuenta
                                </Button>    
                        </Link>
                        </Fragment>
                    )}
                </div>
            </ContainerHeader>
        </header>   
     );
}
 
export default Header;