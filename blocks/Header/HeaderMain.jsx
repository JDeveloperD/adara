import React, { useState } from 'react'
import styled from 'styled-components'
import Col from '../../components/Grid/Col'
import ContainerFluid from '../../components/Grid/ContainerFluid'
import Row from '../../components/Grid/Row'
import NavBar from '../../components/Navbar/Navbar'
import themeSettings from '../../themeSettings.json'
import { fontSize, mediaQuery, themeColors, transitionBase } from '../../theme/variables'
import { AiOutlineMenu, AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsShop } from 'react-icons/bs'
import Logo from '../../components/Icons/Logo'

const HeaderMain = ({ light }) => {

    const [navActive, setNavActive] = useState(false)
    const [navShopActive, setNavShopActive] = useState(false)

    const itemsNavMain = themeSettings.navs.navMain

    const openNavMain = () => setNavActive(!navActive)

    const openNavShop = () => setNavShopActive(!navShopActive)

    return (
        <HeaderMainContainer light={light}>
            <ContainerFluid>
                <Row alignItems="center">
                    <Col sm="4" md="5" lg="4" xl="4" xxl="4">
                        <ButtonHeaderNav light={light} textAlign="left" onClick={openNavMain}>
                            <AiOutlineMenu/> MENÚ
                        </ButtonHeaderNav>

                        <NavBar 
                            navActive={navActive}
                            setNavActive={setNavActive}
                            title="MENÚ"
                            items={itemsNavMain}
                            light={light}
                        />
                    </Col>

                    <Col sm="4" md="2" lg="4" xl="4" xxl="4">
                        <LogoWrapper href="/">
                            <Logo color={themeColors.primary}/>
                        </LogoWrapper>
                    </Col>

                    <Col sm="4" md="5" lg="4" xl="4" xxl="4">
                        <ButtonHeaderNav light={light} textAlign="right" onClick={openNavShop}>
                            TIENDA <BsShop/>
                        </ButtonHeaderNav>

                        <GroupButtons>
                            <ButtonActionShop light={light}>
                                <FiSearch />
                            </ButtonActionShop>
                            <ButtonActionShop light={light}>
                                <AiOutlineUser />
                            </ButtonActionShop>
                            <ButtonActionShop light={light}>
                                <HiOutlineShoppingBag />
                            </ButtonActionShop>
                            <ButtonActionShop light={light}>
                                <AiOutlineHeart />
                            </ButtonActionShop>
                        </GroupButtons>
                    </Col>
                </Row>
            </ContainerFluid>
        </HeaderMainContainer>
    )
}


const HeaderMainContainer = styled.div`
    padding: 0.5rem 0;
    border-bottom: 1px solid ${p => p.light ? `rgba(255,255,255, 0.2)`: `rgba(4, 30, 65, 0.1)`};
`

const ButtonHeaderNav = styled.button`
    width: 100%;
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    text-align: ${p => p.textAlign};
    color: ${p => p.light ? `white` : null };

    ${mediaQuery.laptop} {
        display: none;
    }
`

const LogoWrapper = styled.a`
    display: block;
    height: 40px;
    width: 100%;

    ${mediaQuery.laptop} {
        height: 50px;
    }

    svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const GroupButtons = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: white;
    box-shadow: 3px 3px 8px 5px rgba(233, 232, 236, 0.3);;

    ${mediaQuery.laptop} {
        position: relative;
        left: initial;
        bottom: initial;
        box-shadow: initial;
        background-color: transparent;
        justify-content: flex-end;
        gap: 0 1rem;
    }
`

const ButtonActionShop = styled.button`
    width: 100%;
    padding: 1rem 0;
    border-style: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize.large};
    transition: ${transitionBase};
    cursor: pointer;

    &:active {
        font-size: ${fontSize.default};
    }

    ${mediaQuery.laptop} {
        font-size: ${fontSize.default};
        width: auto;
        color: ${p => p.light ? `white` : null};
    }
`

export default HeaderMain