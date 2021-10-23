/**
 * NavBar
 * 
 * version 0.1
 * 
 * @param {navActive, setNavActive} useState,para mostrar y ocultar el navbar en versiones
 * moviles y tablet, se debe declarar un useState en el archivo que és importado éste.
 * Ejemplo: 
 * 
 * ``
 * import NavBar from 'path/Navbar
 * 
 * const [navActive, setNavActive] = useState(false)
 * 
 * <ParentComponente>
 *  <ButtonShowNav onClick={() => setNavActive(!navActive)} />
 *  <NavBar navActive={navActive} setNavActive={setNavActive} />
 * </ParentComponent>
 * ``
 * 
 * @param {title} String, para diferenciar un menú de otro se debe debe agregar un título
 * 
 * @param {items} Arrau, es la lista de los elementos del menú
 * 
 * @param {light} Boolen, sirve para indicar que será transparente con letras blancas
 * Ejemplo de uso: ``<NavBar ligth={true}></NavBar>``
 * 
 * @param {lgAlign} String, indica la posición que tendrán los items en la vista laptop
 * Ejemplo de valores: ``lgAlign="center" lgAlign="flex-end" lgAlign="flex-start ..."``,
 * estos valores corresponden a las propiedades de ``justify-content``:
 * 
 * Nota ``navActive, setNavActive, title, items`` son Requeridos
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery, themeFonts, themeColors, transitionBase } from '../../theme/variables'
import { resetUl } from '../../theme/mixins'

const NavBar = ({navActive, setNavActive, title, items, light, lgAlign}) => {

    const toggleActive = () => setNavActive(!navActive)

    return (
        <NavBarWrapper active={navActive}>
            <NavBarHead>
                {title}
                <NavBarClose onClick={toggleActive}>x</NavBarClose>
            </NavBarHead>

            <NavBarContent lgAlign={lgAlign}>

                {items ? items.map( item => (
                    <NavBarItem key={item.id}>
                        <NavBarLink href={item.link} light={light} >{item.text}</NavBarLink>
                    </NavBarItem>
                )) : null}

            </NavBarContent>

            <NavBarFooter>
                Diseñado por <a href="#">David Sandoval</a> | © 2021 Adara Joyas
            </NavBarFooter>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    padding: 3rem;
    transition: ${transitionBase};

    ${p => p.active ? css`
        opacity: 1;
        visibility: visible;
    ` : css`
        opacity: 0;
        visibility: hidden;
    ` }
    

    ${mediaQuery.laptop} {
        position: relative;
        top: initial;
        left: initial;
        width: auto;
        height: auto;
        padding: 0;
        opacity: 1;
        visibility: visible;
        background-color: transparent;
    }
`

const NavBarHead = styled.header`
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaQuery.laptop} {
        display: none;
    }
`

const NavBarFooter = styled.footer`
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.05em;
    font-family: ${themeFonts.fontFamilySecondary};

    ${mediaQuery.laptop} {
        display: none;
    }
`

const NavBarClose = styled.button`
    ${mediaQuery.laptop} {
        display: none;
    }
`

const NavBarContent = styled.ul`
    ${resetUl}

    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    height: calc(100% - 9.7rem);

    ${mediaQuery.laptop} {
        flex-direction: row;
        height: auto;
        margin: 0;
        gap: 0 ${p => p.lgAlign ? `7rem` : `1rem`};
        justify-content: ${p => p.lgAlign ? `${p.lgAlign}` : null};
    }
`

const NavBarItem = styled.li``

const NavBarLink = styled.a`
    text-decoration: none;
    color: ${themeColors.bodyText};
    text-transform: uppercase;
    font-size: 12px;
    display: block;
    width: 80%;
    padding: 1.5rem 0;
    transition: ${transitionBase};

    &:hover {
        color: ${themeColors.primary};
    }

    ${mediaQuery.laptop} {
        color: ${p => p.light ? `white`: null};
    }
`

export default NavBar