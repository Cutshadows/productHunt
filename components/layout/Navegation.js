import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/core';


const Nav=styled.nav`
    padding-left:2rem;
    a{
        font-size:1.8rem;
        margin-left:2rem;
        color:var(--gris2);
        font-family:'PT Sans', sans-serif;
        &:last-of-type{
            margin-right:0;
        }
    }
`;

const Navegation = () => {
    return ( 
        <Nav>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/populars"><a>Populares</a></Link>
            <Link href="/new-products"><a>Nuevo Producto</a></Link>
        </Nav>
     );
}
 
export default Navegation;