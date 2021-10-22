/**
 * Inicio
 * 
 * version 0.1
 * 
 * Unifica los componentes de todas las secciones para el Inicio de la web
 * dentro del layout por defecto `DefaultLayoyt`,
 * cabe resaltar que cada sección es un bloque (componente) que debe ser importando
 * de la carpeta ``../blocks``
 * 
 * Secciones utilizadas en ésta página:
 * - {HeroFullSize}
 * - {FeaturedProducts}
 * - {SliderCategories}
 * - {VideoWithBackground}
 */

import React from 'react'
import FeaturedProducts from '../blocks/FeaturedProducts'
import HeroFullSize from '../blocks/HeroFullSize'
import SliderCategories from '../blocks/SliderCategories'
import VideoWithBackground from '../blocks/VideoWithBackground'
import DefaultLayout from '../layouts/DefaultLayout'

const index = () => {
    return (
        <DefaultLayout>
            <HeroFullSize />
            <FeaturedProducts />
            <SliderCategories />
            <VideoWithBackground />
        </DefaultLayout>
    )
}

export default index
