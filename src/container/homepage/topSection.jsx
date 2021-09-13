import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react"
import { useMediaQuery } from "react-responsive";
import styled from "styled-components"
import BackgroundImage from "../../assets/images/background.png"
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { scroller } from "react-scroll";

const TopContainer = styled.div`
    width: 100%;
    height: 85vh;
    padding: 0;

    @media screen and (max-width: 770px) {
        height: 70vh;
    }

    @media screen and (max-width: 450px) {
        height: 70vh;
    }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100%;

    @media screen and (max-width: 450px) {
        height: 70vh;
    }

    @media screen and (max-width: 770px) {
        height: 70vh;
    }

`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
        display: flex;
        justify-content: center;
    }
`;

const BCarousel = styled.div`
    

`;

const CarouselImg = styled.img`
   width: 100%;
   height: 85vh;

   @media screen and (max-width: 450px) {
    height: 70vh;
}

@media screen and (max-width: 770px) {
    height: 70vh;
}

`;

const CarouselContent = styled.div`
    width: 45%;
    margin: -35% auto 0 auto;
    padding: 1rem;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 770px) {
        width: 70%;
        margin: -45% auto 0 auto;
        padding: 0;
    }

    @media screen and (max-width: 450px){
        width: 90%;
        margin: -75% auto 0 auto;
        padding: 0;
    }

`;

const CarouselHeader = styled.h1`
    font-size: 50px;

    @media screen and (max-width: 770px) {
        font-size: 25px;
    }

    @media screen and (max-width: 450px) {
        font-size: 25px;
    }
`;

const CarouselText = styled.p`
    font-size: 20px;

    @media screen and (max-width: 770px) {
        font-size: 16px;
    }

    @media screen and (max-width: 450px) {
        font-size: 16px;
    }
`;

const TopButton = styled.button`
    position: absolute;
    left: 88%;
    top: 85%;
    background: none;
    border: none;

    @media screen and (max-width: 770px){
        left: 70%;
        top: 70%;
    }

    @media screen and (max-width: 450px){
        left: 50%;
        top: 70%;
    }
`;


export function TopSection(props) {

    const scrollToreg = () => {
        scroller.scrollTo('registration', { smooth: true, duration: 1500});
    };

    //const isMobile = useMediaQuery({ query : "(max-width: 450px)" });

    return <TopContainer>
        <StyledCarouselProvider naturalSlideWidth = {200} naturalSlideHeight = {400} totalSlides = {4} visibleSlides = {1}>
            <Slider>
                <StyledSlide index={0}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Dictum nulla id sed arcu</CarouselHeader>
                            <Marginer direction = "vertical" margin= "3rem" />
                            <CarouselText>Risus, egestas dui sit vulputate enim ornare morbi enim, congue. Libero hendrerit purus orci tellus pretium vel lacus augue arcu. Eu mauris a, id scelerisque quis ipsum. In iaculis non praesent turpis. Sagittis urna vel bibendum ornare gravida lectus diam.</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
                <StyledSlide index={1}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Dictum nulla id sed arcu</CarouselHeader>
                            <CarouselText>Risus, egestas dui sit vulputate enim ornare morbi enim, congue. Libero hendrerit purus orci tellus pretium vel lacus augue arcu. Eu mauris a, id scelerisque quis ipsum. In iaculis non praesent turpis. Sagittis urna vel bibendum ornare gravida lectus diam.</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
                <StyledSlide index={2}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Dictum nulla id sed arcu</CarouselHeader>
                            <CarouselText>Risus, egestas dui sit vulputate enim ornare morbi enim, congue. Libero hendrerit purus orci tellus pretium vel lacus augue arcu. Eu mauris a, id scelerisque quis ipsum. In iaculis non praesent turpis. Sagittis urna vel bibendum ornare gravida lectus diam.</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
                <StyledSlide index={3}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Dictum nulla id sed arcu</CarouselHeader>
                            <CarouselText>Risus, egestas dui sit vulputate enim ornare morbi enim, congue. Libero hendrerit purus orci tellus pretium vel lacus augue arcu. Eu mauris a, id scelerisque quis ipsum. In iaculis non praesent turpis. Sagittis urna vel bibendum ornare gravida lectus diam.</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
            </Slider>
        </StyledCarouselProvider>
        <TopButton onClick={scrollToreg}>
            <Button>Register for SLC</Button>
        </TopButton>
    </TopContainer>
}