/**
 * Col
 * 
 * version 0.1
 */
import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../../theme/variables';

const Col = ({ children, ...props }) => {
    return (
        <StyledCol {...props}>
            {children}
        </StyledCol>
    )
}

const handleWidth = (size) => {
    switch (size) {
        case '1':
            return 8.33333333;
        case '2':
            return 16.66666667;
        case '3':
            return 25;
        case '4':
            return 33.33333333;
        case '5':
            return 41.66666667;
        case '6':
            return 50;
        case '7':
            return 58.33333333;
        case '8':
            return 66.66666667;
        case '9':
            return 75;
        case '10':
            return 83.33333333;
        case '11':
            return 91.66666667;
        default:
            return 100;
    }
}

const StyledCol = styled.div`
    flex: ${p => p.sm || p.md || p.lg ? '0 0 auto' : '1 0 0%' };
 
    width: ${p => handleWidth(p.sm)}% !important;
    
    ${mediaQuery.tablet} {
        width: ${p => handleWidth(p.md)}% !important;
    }

    ${mediaQuery.laptop} {
        width: ${p => handleWidth(p.lg)}% !important;
    }

    ${mediaQuery.desktop} {
        width: ${p => handleWidth(p.xl)}% !important;
    }
    
    ${mediaQuery.desktopL} {
        width: ${p => handleWidth(p.xxl)}% !important;
    }
`

export default Col