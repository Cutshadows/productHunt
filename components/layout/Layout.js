import React,{Fragment} from 'react';
import styles from '../../styles/Home.module.css'
import Header from './Header';
import {Global, css} from '@emotion/core';
import Head from 'next/head';

const Layout = props => {
    return (
        <Fragment>
        <Head>
            <html lang="es" />
            <title>Product Hunt Firebase & Nextjs.</title>
            <link href="https://pagecdn.io/lib/normalize/8.0.1/normalize.min.css" rel="stylesheet" crossOrigin="anonymous"  />
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
            <link href="/static/css/app.css" rel="stylesheet"/>
        </Head>
        <Global 
        styles={css`
            :root{
                --gris: #3d3d3d;
                --gris2:#6F5F5F;
                --gris3:#e1e1e1;
                --orange:#DA552F;
            }
            html{
                font-size:62.5%;
                box-sizing:border-box;
            }
            *, *:before, *:after{
                box-sizing:inherit;
            }
            body{
                font-family:'PT Sans', sans-serif;  
                font-size:1.6rem; /* igual a 16px */
            }
            h1, h2, h3{
                margin: 0 0 2rem 0;
                line-height: 1.5;
            }
            h1, h2{
                font-family:'Roboto Slab', serif;
                font-weight: 700;
            }
            h3{
                font-family:'PT Sans', sans-serif;  
             }
            ul{
                list-style: none;
                margin:0;
                padding:0;
            }
            a{
                text-decoration:none;
            }
        `}/>
        <Header />
        <main >
            {props.children}
        </main>
        </Fragment>
     );
}
 
export default Layout;