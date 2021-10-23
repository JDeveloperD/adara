/**
 * HeroFullSize
 * 
 * version 0.1
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
    EffectFade,
    Autoplay,
    Pagination
 } from 'swiper/core'
import 'swiper/swiper-bundle.css'
import Col from '../components/Grid/Col'
import ContainerFluid from '../components/Grid/ContainerFluid'
import Row from '../components/Grid/Row'
import Button from '../components/Button'
import themeSettings from '../themeSettings.json'
import { backgroundCover } from '../theme/mixins'
import { colors, mediaQuery, themeFonts } from '../theme/variables'

const HeroFullSize = () => {

    const slider = themeSettings.pages.home.hero
    
    SwiperCore.use([ EffectFade, Autoplay, Pagination ])

    const renderBullet = (index, className) => {
        return `<span class="${className}" >${index + 1}</span>`
    }

    return (
        <Swiper
            effect={"fade"}
            loop={true}
            autoplay={true}
            pagination={ { clickable: true, renderBullet: renderBullet } }
        >
            {slider && slider.map(slide => (
                <SwiperSlide key={slide.id}>
                    <SwiperItem image={slide.image}>
                        <SwiperItemContent>
                            <ContainerFluid>
                                <Row justifyContent="flex-end">
                                    <Col lg="8" xl="7" xxl="6">
                                        <SwiperItemTitle>{slide.caption.title}</SwiperItemTitle>
                                        <SwiperItemDescription>{slide.caption.description}</SwiperItemDescription>

                                        {slide.caption.buttons.map( (button, key) => (
                                            <Button
                                                key={key}
                                                link
                                                href={button.link}
                                                type="stroke"
                                                color="white" >
                                                    {button.text}
                                            </Button>
                                        ) )}
                                    </Col>
                                </Row>
                            </ContainerFluid>
                        </SwiperItemContent>
                    </SwiperItem>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

const SwiperBullet = styled.span``

const SwiperItem = styled.figure`
    margin: 0;
    width: 100%;
    height: 100vh;
    color: ${colors.white};
    font-family: ${themeFonts.fontFamilySecondary};
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.6) 4.04%,
        rgba(0, 0, 0, 0) 100%),
        url(${p => p.image ? p.image: null});
    ${backgroundCover}
    
    a {
        text-transform: uppercase;
    }

    ${mediaQuery.laptop} {
        text-align: right;
    }
`

const SwiperItemContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const SwiperItemTitle = styled.h2`
    margin-bottom: 2.5rem;

    ${mediaQuery.tablet} {
        font-size: 2.5rem;
    }

    ${mediaQuery.desktop} {
        font-size: 3rem;
    }
`
const SwiperItemDescription = styled.p`
    margin-bottom: 1.5rem;

    ${mediaQuery.tablet} {
        font-size: 18px;
    }
`

export default HeroFullSize