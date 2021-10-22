/**
 * Row
 * 
 * version 0.1
 * 
 * Este componente ésta destinado para contener columnas y
 * alinearlos de manera que convenga
 * 
 * @param {justifyContent} String
 * @param {alignItems} String
 * @param {flexDirection} String
 * 
 * Ejemplo de uso `<Row justifyContent="center"> ... </Row>`
 * 
 * Nota: Ninguno de los parámetros es requerido,
 * no hay parámetros responsive
 */
import React from 'react'
import styled from 'styled-components'

const Row = ({ children, ...props }) => {
    return (
        <StyledRow {...props}>
                
            {children}

        </StyledRow>
    )
}

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
    margin-left: -1rem;
    margin-right: -1rem;

    & > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export default Row