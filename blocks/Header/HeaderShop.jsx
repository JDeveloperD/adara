import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from '../../components/Navbar/Navbar'
import themeSettings from '../../themeSettings.json'

const HeaderShop = ({ light }) => {

    const [navShopActive, setNavShopActive] = useState(false)

    const itemsNavShop = themeSettings.navs.navShop

    return (
        <HeaderShopContainer>
            <NavBar 
                navActive={navShopActive}
                setNavActive={setNavShopActive}
                title="TIENDA"
                items={itemsNavShop}
                light={light}
                lgAlign="center"
            />
        </HeaderShopContainer>
    )
}

const HeaderShopContainer = styled.div``

export default HeaderShop