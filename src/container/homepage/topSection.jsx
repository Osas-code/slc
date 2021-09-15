import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react"
import styled from "styled-components"
import BackgroundImage from "../../assets/images/background.png"
import { Button } from "../../components/button";
import { scroller } from "react-scroll";

const TopContainer = styled.div`
    width: 100%;
    height: 85vh;
    padding: 0;

    @media screen and (max-width: 770px) {
        height: 80vh;
    }

    @media screen and (max-width: 450px) {
        height: 80vh;
    }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100%;

    @media screen and (max-width: 450px) {
        height: 80vh;
    }

    @media screen and (max-width: 770px) {
        height: 80vh;
    }

`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
        display: flex;
        justify-content: center;
    }
`;

const BCarousel = styled.div`
    width: 100%;
    height: 85%;
    align-items: center;

    @media screen and (max-width: 770px) {
        height: 80vh;
    }
`;

const CarouselImg = styled.img`
   width: 100%;
   height: 85vh;

   @media screen and (max-width: 450px) {
    height: 80vh;
}

@media screen and (max-width: 770px) {
    height: 80vh;
}

`;

const CarouselContent = styled.div`
    width: 65%;
    margin: -25% auto;
    text-align: center;
    color: #fff;
    align-items: center;

    @media screen and (max-width: 770px) {
        width: 70%;
        margin: -60% auto;
        padding: 0;
    }

    @media screen and (max-width: 450px){
        width: 70%;
        margin: -60% auto;
        padding: 0;
    }

`;

const CarouselHeader = styled.h1`
    font-size: 50px;

    @media screen and (max-width: 770px) {
        font-size: 25px;
    }

    @media screen and (max-width: 450px) {
        font-size: 30px;
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
            margin-left: 10px;
        }
    }

    .carousel__dot--selected{
        background: $(theme.primary);
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
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    box-shadow: 0 2px 19px #0000000F;
    border: none;
    pointer: cursor;

    @media screen and (max-width: 770px){
        bottom: 20px;
        right: 20px;
        background: none;
    }

    @media screen and (max-width: 450px){
        bottom: 20px;
        right: 20px;
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
                            <CarouselHeader>Animate </CarouselHeader>
                            <CarouselText>Create the glorifying presence of the Lord with the help of the Holy Spirit</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
                <StyledSlide index={1}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Revitalize</CarouselHeader>
                            <CarouselText>Restore energy and get set up to do greater things and make bigger things happen for God’s kingdom on Earth</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
                <StyledSlide index={2}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Vivify</CarouselHeader>
                            <CarouselText>Become more alive through the Life of Christ within you.</CarouselText>
                        </CarouselContent>
                    </BCarousel>
                </StyledSlide>
                <StyledSlide index={3}>
                    <BCarousel>
                        <CarouselImg src={BackgroundImage} />
                        <CarouselContent>
                            <CarouselHeader>Vivify</CarouselHeader>
                            <CarouselText>Become more alive through the Life of Christ within you.</CarouselText>
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