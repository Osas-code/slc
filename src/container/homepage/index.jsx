import React from 'react'
import styled from 'styled-components';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import { AboutSection } from './aboutSection';
import { Contact } from './contact';
import { CountDown } from './countdown';
import { Testimony } from './testimony';
import { TopSection } from './topSection';

const PageContainer = styled.div`
    background: #E5E5E5;
`;

export default function HomePage(props) {
    return <PageContainer>
        <Navbar />
        <TopSection />
        <AboutSection />
        <Testimony />
        <Contact />
        <CountDown />
        <Footer />
    </PageContainer>
}