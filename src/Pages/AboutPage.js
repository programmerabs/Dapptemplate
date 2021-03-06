 

import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';
import HeaderImage from '../img/header.jpeg';
function AboutPage() {
    return (
        <>
        <img src={HeaderImage} style={{width:'100%'}} />
        <MainLayout>
            <AboutStyled >
                <Title title={'About US'} span={'About US'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
        </>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage