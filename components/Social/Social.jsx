/**
 * Social
 * 
 * version 0.1
 * 
 * El componente se encarga de renderizar la lista
 * de redes sociales que cuenta la empresa.
 * 
 * Utiliza el módulo `react-icons/` para los íconos,
 * la función `renderSocialIcon()` retorna el componente ícono
 * que sea conveniente según el caso,
 * 
 * Si se desea agregar otro ícono o red social puede visitar el 
 * siguiente link `https://react-icons.github.io/react-icons/icons?name=fa`
 * 
 */

import React from 'react'
import styled from 'styled-components'
import { resetUl } from '../../theme/mixins'

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { colors } from '../../theme/variables'

import themeSettings from '../../themeSettings.json'

const renderSocialIcon = (name) => {
    switch(name) {
        case 'facebook':
            return <FaFacebookF />
        case 'twitter' :
            return <FaTwitter />
        case 'instagram' :
            return <FaInstagram />
        default :
            return <FaFacebookF />
    }
}

const Social = ({ light }) => {
    const socialItems = themeSettings.navs.navSocial

    return (
        <NavSocialContainer>
            {socialItems.map(item => (
                <NavSocialItem key={item.id}> 
                    <NavSocialLink href={item.link} target="_blank" light={light}> 
                        {renderSocialIcon(item.text)}
                    </NavSocialLink>
                </NavSocialItem>
            ))}
        </NavSocialContainer>
    )
}

const NavSocialContainer = styled.ul`
    ${resetUl}
    
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
`

const NavSocialItem = styled.li``

const NavSocialLink = styled.a`
    font-size: 1rem;
    color: ${props => props.light ? colors.white : null};
`

export default Social