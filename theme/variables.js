/**
 * Variables
 * 
 * version 0.1
 * 
 * Este archivo contiene las constantes que se usarán como base para el diseño de la web,
 * se puede importar en cualquier archivo que se necesite,
 * ojo cada constante debe ser importado de la siguiente manera: 
 * 
 * 
 * ``import { colors } from './variables'``
 * 
 * ``color: ${colors.white};`` lo que sería igual a ``color: white;``
 */

/**
 * Medidas Responsive
 */
export const breakPoints = {
    sm: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1400
}

/**
 * Medias Queries para css
 */
export const mediaQuery  = {
    mobile : `@media (min-width: ${breakPoints.sm}px)`,
    tablet : `@media (min-width: ${breakPoints.m}px)`,
    laptop : `@media (min-width: ${breakPoints.l}px)`,
    desktop : `@media (min-width: ${breakPoints.xl}px)`,
    desktopL : `@media (min-width: ${breakPoints.xxl}px)`,
}

/**
 * Paleta de colores en general
 */
export const colors = {
    black: 'black',
    white: 'white',
    blueNight: '#041e41',
    blueNightVariation: '#00132c',
    gold: '#cc9a52',
    warning: '#F2C94C',
    alert: '#EB5757',
    info: '#2F80ED',
    success: '#219653'
}

/**
 * Paleta de colores "Escala de grises"
 */
export const grayScale = {
    gray100: '#F6F6F7',
    gray200: '#E9E8EC',
    gray300: '#DCDAE0',
    gray400: '#D0CCD4',
    gray500: '#C3BEC9',
    gray600: '#B6B0BD',
    gray700: '#A9A2B1',
    gray800: '#9C95A6',
    gray900: '#8F879A'
}

/**
 * Paleta de colores para el Thema
 */
export const themeColors = {
    primary: colors.gold,
    secondary: grayScale.gray900,
    accent: colors.info,
    bodyText: colors.blueNight,
}

/**
 * Tansición base para el cambio de estilo
 */
export const transitionBase = `0.3s linear`

/**
 * Lista de Todos los tamaños de fuente
 */
export const fontSize = {
    small: '12px',
    default: '1rem',
    medium: '1.25rem',
    large: '1.5rem',
    xlarge: '2.5rem'
}

/**
 * Listado de nombres de las fuentes
 */
export const fonts = {
    quattrocentroSans: "'Quattrocento Sans', sans-serif",
    raleway: "'Raleway', sans-serif"
}

/**
 * Fuentes principales para el tema
 */
export const themeFonts = {
    fontFamilyBody: fonts.quattrocentroSans,
    fontFamilySecondary: fonts.raleway,
}

/**
 * Estado de los elemento link
 */
export const linkColor = `${themeColors.primary}`
export const linkDecoration = `underline !default`
export const linkHoverDecoration = `null !default`