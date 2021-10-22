import React from 'react'
import styled from 'styled-components'
import Col from '../../components/Grid/Col'
import ContainerFluid from '../../components/Grid/ContainerFluid'
import Row from '../../components/Grid/Row'
import Social from '../../components/Social/Social'
import { fontSize, mediaQuery, themeColors } from '../../theme/variables'

const HeaderTop = ({ light }) => {
    return (
        <HeaderTopContainer light={light}>
            <ContainerFluid>
                <Row alignItems="center">
                    <Col> 
                        <Social light={light}/>
                    </Col>
                    <Col>
                        <HeaderTopMessage light={light}>
                            Consúltanos por nuestro WhatsApp al 937507582
                        </HeaderTopMessage>
                    </Col>
                </Row>
            </ContainerFluid>
        </HeaderTopContainer>
    )
}

const HeaderTopContainer = styled.div`
    display: none;
    background: ${p => p.light ? `transparent`: `${themeColors.bodyText}`};
    
    ${mediaQuery.tablet} {
        display: block;
        border-bottom: 1px solid ${p => p.light ? `rgba(255,255,255, 0.5)`: null};
        padding: 0.5rem 0;
    }
`

const HeaderTopMessage = styled.em`
    display: block;
    font-size: ${fontSize.small};
    font-style: normal;
    text-align: right;
    color: ${p => p.light ? `white` : `${themeColors.primary}` };
`

export default HeaderTop