/**
 * ContainerFluid
 * 
 * version 0.1
 * 
 * Componente que mantiene un modelo de caja uniforme
 */
import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../../theme/variables'

const ContainerFluid = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;

    ${mediaQuery.mobile} {
         max-width: 540px;
    }
    
    ${mediaQuery.tablet} {
         max-width: 720px;
    }
    
    ${mediaQuery.laptop} {
         max-width: 960px;
    }
    
    ${mediaQuery.desktop} {
         max-width: 1140px;
    }
    
    ${mediaQuery.desktopL} {
         max-width: 1320px;
    }
`

export default ContainerFluid