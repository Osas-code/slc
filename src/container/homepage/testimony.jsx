import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react"
import { Element } from 'react-scroll';
import styled from "styled-components";
import { TestiCard } from "../../components/testicard";
import { theme } from "../../theme";
import { useMediaQuery } from "react-responsive"

import 'pure-react-carousel/dist/react-carousel.es.css';

const TestiContainer = styled(Element)`
   // margin-top: 2rem;
    padding: 2rem 0;
    height: 600px;
    display: flex;
    flex-direction: column;
    background: ${theme.primary};
    align-items: center;
`;

const TestiTitle = styled.h6`
    font-size: 18px;
    color: #fff;
    padding: .3rem 0;
`;

const Testih1 = styled.h1`
    font-size: 32px;
    color: #fff;
    padding: .3rem 0;
`;

const Testihr = styled.div`
    width: 10%;
    height: .1rem;
    background: ${theme.secondary};
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 85%;

    @media screen and (max-width: 770px){
        width: 80%;
        height: 70vh;
        overflow: hidden;
    }

    @media screen and (max-width: 450px){
        width: 80%;
    }
`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
        display: flex;
        justify-content: center;
    }
    
    @media screen and (max-width: 450px){
        
    }
`;

const StyledDotGroup = styled(DotGroup)`
    button{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #e4e4e4;
        border: none;
        outline: none;
        &:not(:last-of-type){
            margin-left: 3px;
        }
    }

    .carousel__dot--selected{
        background: #EE8A51;
    }
`;


export function Testimony(props) {

    const isMobile = useMediaQuery({ query : "(max-width: 770px)" });

    return <TestiContainer name="testimony">
        <TestiTitle>Testimonies</TestiTitle>
        <Testih1>Transform Lives</Testih1>
        <Testihr></Testihr>
        <StyledCarouselProvider naturalSlideWidth = {200} naturalSlideHeight = {200} totalSlides = {4} visibleSlides = { isMobile ? 1 : 3}>
            <Slider>
                <StyledSlide index={0}>
                    <TestiCard testiText = "Orci aliquet neque aenean laoreet ipsum faucibus adipiscing. Sit sit scelerisque lacus vitae, netus convallis viverra platea. Ut aenean odio id integer arcu ultricies placerat. Neque, tellus ridiculus urna" testiName = "John Doe" />
                </StyledSlide>
                <StyledSlide index={1}>
                    <TestiCard testiText = "Orci aliquet neque aenean laoreet ipsum faucibus adipiscing. Sit sit scelerisque lacus vitae, netus convallis viverra platea. Ut aenean odio id integer arcu ultricies placerat. Neque, tellus ridiculus urna" testiName = "John Doe" />
                </StyledSlide>
                <StyledSlide index={2}>
                    <TestiCard testiText = "Orci aliquet neque aenean laoreet ipsum faucibus adipiscing. Sit sit scelerisque lacus vitae, netus convallis viverra platea. Ut aenean odio id integer arcu ultricies placerat. Neque, tellus ridiculus urna" testiName = "John Doe" />
                </StyledSlide>
                <StyledSlide index={3}>
                    <TestiCard testiText = "Orci aliquet neque aenean laoreet ipsum faucibus adipiscing. Sit sit scelerisque lacus vitae, netus convallis viverra platea. Ut aenean odio id integer arcu ultricies placerat. Neque, tellus ridiculus urna" testiName = "John Doe" />
                </StyledSlide>
            </Slider>
        </StyledCarouselProvider>
    </TestiContainer>
}