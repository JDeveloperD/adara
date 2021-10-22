/**
 * Default Layout
 * 
 * version 0.1
 * 
 * 
 */

import React from 'react'
import styled from 'styled-components'
import Header from '../blocks/Header/Header'
import Footer from '../blocks/Footer'

const DefaultLayout = ({ children, light }) => {
    return (
        <>
            <Header light={light} />

            <Main> {children} </Main>

            <Footer/>
        </>
    )
}

const Main = styled.main``

export default DefaultLayout