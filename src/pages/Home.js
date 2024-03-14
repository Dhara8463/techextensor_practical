import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import FeaturesSection from '../components/FeaturesSection/FeaturesSection'
import HomeSliderSection from '../components/HomeSliderSection/HomeSliderSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <HomeSliderSection />
        </>
    )
}

export default Home