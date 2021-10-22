/**
 * Header
 * 
 * version 0.1
 * 
 * Esta bloque está designado para la unificación del componente Header
 * el cual está conformado por 3 secciones:
 * - ${HeaderTop} 
 * - ${HeaderMain} 
 * - ${HeaderShop} 
 * 
 * Puede recibir el parámetro "light" para indicar que todo será transparente
 * de caso contrario se mantendrá los background por defecto
 */

import React from 'react'
import styled, { css } from 'styled-components'
import HeaderTop from './HeaderTop'
import HeaderShop from './HeaderShop'
import HeaderMain from './HeaderMain'

const HeaderContainer = styled.header`
    ${p => p.light ? css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        width: 100%;
    ` : null }
`

const Header = ({ light }) => {

    return (
        <HeaderContainer light={light}>
            
            <HeaderTop light={light}/>

            <HeaderMain light={light}/>

            <HeaderShop light={light}/>

        </HeaderContainer>
    )
}

export default Header