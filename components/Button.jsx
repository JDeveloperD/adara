/**
 * Button
 * 
 * version 0.1
 * 
 * El componente no tiene parámetros requeridos, 
 * por defecto renderiza una elemento de etiqueta "<button />",
 * si se le pasa como parámetro el nombre "link", renderizará la etiqueta "<a />"
 * al cual se le puede pasar el attributo "href" sin problemas, por ejemplo
 * ``<Button href="/path">Enlace</Button>``
 * 
 * los eventos como "onClick" se declaran en la instancia del componente, por ejemplo
 * ``<Button onClick={() => foo()}>Texto</Button>``
 * 
 * @param {color} String, define el color del botón por defecto es "primary"
 * Nota: debe colocarse un nombre que esté en la lista de colores del tema `../theme/variables`
 * Ejemplo de valores: ``color="secondary" | color="alert" | color="success" | color="info" ...```
 * 
 * @param {size} String, tamaño del botón, por defecto es "md"
 * Ejemplo de valores: ``size="sm" | size="md" | size="lg"``
 * 
 * @param {type} String, tipo del botón por, defecto es "solid"
 * Ejemplo de valores: ```type="solid" | type="stroke" | type="link"``
 * 
 * @param {shape} String, forma que tendrá el botón, por defecto es "rectangle"
 * Ejemplo de valores: ```shape="rectangle" | shape="rounded" | shape="circle"``
 * 
 * @param {styleButton} String, estilo del botón que indica el tipo de contenido que tendrá, por defecto es "only-text"
 * Ejemplo de valores: ``styleButton="with-icon" | styleButton="text" | styleButton="icon"``
 * 
 * ``<Button color="success" size="lg" type="stroke" shape="rounded-circle">Texto</Button>``
 * 
 * Nota: Ninguno de los parámetros es requerido, se puede agregar el que desee con su valor respectivo
 */

import React from 'react'
import styled from 'styled-components'
import { buttonVariant } from '../theme/mixins'

const Button = ({ children, link , ...props }) => {
    return (
        <> 
            {link ? (
                <StyledWithLinkTag {...props}>
                    {children}
                </StyledWithLinkTag>
            ) : (
                <StyledWithButtonTag {...props}>
                    {children}
                </StyledWithButtonTag>
            )}
        </>
    )
}

const StyledWithButtonTag = styled.button`
    ${p => buttonVariant(p)}
`

const StyledWithLinkTag = styled.a`
    ${p => buttonVariant(p)}
`

export default Button