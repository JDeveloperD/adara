/**
 * Mixins
 * 
 * version 0.1
 * 
 * Este archivo contiene los "mixins" que a su vez pueden ser constantes o funciones
 * que contienen propiedades css reutilizables, por ejemplo:
 * 
 * `${resetUl}` reinicia los estilos de una etiqueta "<ul />", en éste caso no hay una lógica
 * por lo que sólo se declara como una constante
 * 
 * otro ejemplo: `${buttonVariant( type )}`
 * éste por ejemplo si es una función porque va devolver css dependiendo de los valores que se
 * ingresen como parámetros, que en este caso es el tipo de botón
 * 
 */

import { css } from 'styled-components'
import { fontSize, themeColors, colors, transitionBase, grayScale } from './variables'

export const resetUl = css`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const inlineFlexCenter = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

export const resetButtonStyles = css`
    display: inline-block;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid transparent;
    transition: ${transitionBase};
    color: ${themeColors.bodyText};

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.95);
        filter: brightness(0.7);
    }
`

export const buttonVariant = ({color, size, type, shape, styleButton}) => {
    let cssFinal = ""   
    
    let colorHexadecimal = getColor(color)

    cssFinal += buttonVariantBySize(size)

    cssFinal += buttonVariantByType(type, colorHexadecimal)

    cssFinal += buttonVariantByShape(shape,)

    cssFinal += buttonVariantByStyle(styleButton, size)

    return css`
        ${resetButtonStyles}
        ${cssFinal}
    `
}

const getColor = (color) => {
    if (themeColors[color]) {
        return themeColors[color]
    }

    if (colors[color]) {
        return colors[color]
    }

    if (grayScale[color]) {
        return grayScale[color]
    }
}

const buttonVariantBySize = (size) => {
    switch (size) {
        case "sm":
            
            return `
                padding: 0.25rem 1rem;
                font-size: ${fontSize.small};`


        case "lg":
            
            return `
                padding: 0.75rem 2rem;
                font-size: ${fontSize.large};`
                

        default:

            return `
                padding: 0.625rem 1.5rem;
                font-size: ${fontSize.default};`
    }
}

const buttonVariantByType = (type, colorHexadecimal) => {
    switch (type) {
        case "stroke":

            return `
                border: 1px solid ${colorHexadecimal} !important;
                color: ${colorHexadecimal};
                
                &:hover { 
                    background: ${colorHexadecimal};
                    color: ${colors.white};
                }`

        case "link":

            return `
                padding: 0.25rem;
                color: ${colorHexadecimal};`

        default:

            return `
                background-color: ${colorHexadecimal};
                ${colorHexadecimal ? `color: ${colors.white};`: null}`
    }
}

const buttonVariantByShape = (shape) => {
    switch (shape) {
        case "rounded" :
            
            return `
                border-radius: 0.5rem;`

        case "rounded-circle":
            
            return `
                border-radius: 2.5rem;`

        case "circle" :
            
            return `
                border-radius: 50%;`

        default :
            return ``
    }
}

const buttonVariantByStyle = (styleButton, size) => {
    switch (styleButton) {
        case "with-icon" :
            
            return`
                display: inline-flex;
                gap: 0 0.75rem;
                align-items:center;`
        
        case "icon" :
            
            if (size === 'lg') {
                
                return `
                    ${inlineFlexCenter}
                    padding: 0;
                    width: 45px;
                    height: 45px;`

            } else if (size === 'sm') {

                return`
                    ${inlineFlexCenter}
                    padding: 0;
                    width: 20px;
                    height: 20px;`
                
            } else {

                return`
                    ${inlineFlexCenter}
                    padding: 0;
                    width: 34px;
                    height: 34px;
                `
            }
        
        default :

            return ``
    }
}