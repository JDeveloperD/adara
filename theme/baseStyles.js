/**
 * BaseStyles
 * 
 * version 0.1
 * 
 * Se deben considerar únicamente etiquetas html
 * no se deben ingresar 'clases' ni 'ids'
 * 
 * Debe ser utilizado para reiniciar alguna etiqueta
 * de manera global en la web, sin variar el estilo de
 * algún componente
 */

import { createGlobalStyle } from 'styled-components'
import { themeFonts, themeColors, fontSize } from './variables'

const BaseStyles  = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    :focus {
        outline: none;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${themeFonts.fontFamilyBody};
        width: 100%;
        overflow-x: hidden;
        color: ${themeColors.bodyText};
        font-size: ${fontSize.default};
    }

    a {
        color: ${themeColors.primary};
    }
`

export default BaseStyles