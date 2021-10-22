/**
 * Footer
 * 
 * version 0.1
 * 
 * El footer no obtiene ninguna propiedad,
 * utiliza los siguientes componentes:
 * 
 * {ContainerFluid, Row, Col} para la gestión de filas, columnas y contenedor general
 * {Social} que viene a ser la reprentación del componente de Redes sociales
 * {Logo} representa al logotipo en formato <svg />
 * {React Icons} para la iconografía
 * 
 * Se está importando el archivo `themeSettings.json` para obtener la información de:
 * La empresa (nombre, descripción, localización y teléfonos)
 * De la lista de "Navs" obtenemos el "NavFooter"
 * Para la sección de copy los datos del creador (nombre y urlWeb)
 * 
 */

import React from 'react'
import styled from 'styled-components'
import { colors, themeColors, mediaQuery, fontSize, themeFonts } from '../theme/variables'
import Col from '../components/Grid/Col'
import ContainerFluid from '../components/Grid/ContainerFluid'
import Row from '../components/Grid/Row'
import Logo from '../components/Icons/Logo'
import Social from '../components/Social/Social'
import { AiOutlinePhone } from 'react-icons/ai'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { resetUl } from '../theme/mixins'
import themeSettings from '../themeSettings.json'

const Footer = () => {
    const navFooter = themeSettings.navs.navFooter
    const companyInfo = themeSettings.infoCompany
    const autor = themeSettings.infoCreator

    return (
        <>
            <FooterContent>
                <ContainerFluid>
                    <Row justifyContent="center">
                        <Col sm="12" md="6" lg="4" xl="4" xxl="4">
                            <LogoWrapper>
                                <Logo color={themeColors.primary}/>
                            </LogoWrapper>
                            <FooterText>
                                {companyInfo.description}
                            </FooterText>
                            <Social/>
                        </Col>

                        <Col sm="12" md="6" lg="4" xl="4" xxl="4">
                            <FooterTitle> CONTÁCTANOS </FooterTitle>

                            {companyInfo.phones && companyInfo.phones.map((phone, key) => (

                                <FooterText key={key}>
                                    <AiOutlinePhone /> {phone}
                                </FooterText>
                            ))}

                            <FooterText>
                                <TiLocationArrowOutline /> {companyInfo.location.address}
                            </FooterText>
                        </Col>

                        <Col sm="12" md="6" lg="4" xl="4" xxl="4">
                            <FooterTitle> MAPA DEL SITIO </FooterTitle>

                            <NavFooter>
                                {navFooter && navFooter.map(item => (
                                    <NavFooterItem key={item.id}>
                                        <NavFooterLink href={item.link}> {item.text} </NavFooterLink>
                                    </NavFooterItem>
                                ) )}
                            </NavFooter>
                        </Col>
                    </Row>
                </ContainerFluid>
            </FooterContent>
            <Copy>
                <ContainerFluid>
                    Diseñado por
                    <a href={autor.webUlr} target="_blank">{autor.name}</a>
                    | © {new Date().getFullYear()} {companyInfo.name}
                </ContainerFluid>
            </Copy>
        </>
    )
}

const FooterContent = styled.footer`
    background: ${colors.blueNight};
    padding: 3rem 0;
`

const LogoWrapper = styled.a`
    display: block;
    width: 100%;
    height: 70px;
    margin-bottom: 1.5rem;

    svg {
        width: 100%;
        height: 100%;
        object-fit: contain;

        ${mediaQuery.laptop} {
            width: auto;
        }
    }
`

const FooterText = styled.p`
    color: white;
    font-size: 14px;
    text-align: center;

    ${mediaQuery.laptop} {
        text-align: left;
    }
`

const FooterTitle = styled.h3`
    text-align: center;
    color: ${themeColors.primary};

    ${mediaQuery.laptop} {
        text-align: left;
    }
`

const NavFooter = styled.ul`
    ${resetUl}
`

const NavFooterItem = styled.li`
    margin-bottom: 1rem;
    text-align: center;

    ${mediaQuery.laptop} {
        text-align: left;
    }
`

const NavFooterLink = styled.a`
    color: white;
    font-size: 14px;
    text-decoration: none;
`

const Copy = styled.div`
    padding: 0.5rem 0;
    color: white;
    font-size: ${fontSize.small};
    font-family: ${themeFonts.fontFamilySecondary};
    background-color: ${colors.blueNightVariation};
    text-align: center;

    ${mediaQuery.laptop} {
        text-align: left;
    }
`

export default Footer