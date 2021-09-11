import React from "react"
import styled from "styled-components";
import AboutIcon1 from "../../assets/icons/vector.png"
import AboutIcon2 from "../../assets/icons/vector-1.png"
import AboutIcon3 from "../../assets/icons/vector-2.png"
import { Marginer } from "../../components/marginer";
import { theme } from "../../theme";

const AboutContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 75% 25%;
    overflow: hidden;

    @media screen and (max-width: 450px){
        grid-template-columns: 100%;
    }
`;

const AboutWhite = styled.div`
    display: flex;
    padding: 5rem 10rem;

    @media screen and (max-width: 450px){
        flex-direction: column;
        padding: 3rem;
        text-align: center;
    }
`;

const AboutColor = styled.div`
    background: ${theme.secondary};
    padding: 3rem 5rem 3rem 2rem;
    z-index: 1;
    margin: -2rem;

    @media screen and (max-width: 450px){
        text-align: center;
        padding: 3rem 5rem
    }
`;

const AboutBox = styled.div`
    padding: 1rem
`;

const AboutImg = styled.img`
    width: 2.5rem;
`;

const Abouth3 = styled.h3`
    font-size: 15px;
    font-weight: 700;
    padding: .3rem 0;
`;

const Abouth4 = styled.h4`
    font-size: 12px;
    color: ${theme.primary};
    font-weight: 700;
    padding: .3rem 0;
`;

const Abouthr = styled.div`
    width: 40%;
    height: .2vh;
    background: #000;
    margin: .3rem 0;

    @media screen and (max-width: 450px){
        margin: auto;
    }
`;

const AboutP = styled.p`
    font-size: 14px;
    padding: .3rem 0;
`;

const Abouth2 = styled.h2`
    font-size: 24px;
    
    @media screen and (max-width: 450px){
        
    }
`;

const AboutSpan = styled.p`
    font-size: 28px;
    color: #fff;
    padding: .3rem 0;
`;

const AboutP2 = styled.p`
    font-size: 15px;
    padding: .3rem 0;
    color: #fff;
`;

export function AboutSection(props) {
    return <AboutContainer>
        <AboutWhite>
            <AboutBox>
                <AboutImg src={AboutIcon1} />
                <Abouth3>Prayer</Abouth3>
                <Abouth4>Eget imperdiet</Abouth4>
                <Abouthr></Abouthr>
                <AboutP>Luctus eget neque eget scelerisque. Sapien ut scelerisque sagittis hac viverra dui.</AboutP>
            </AboutBox>
            <Marginer direction = "vertical" margin = "5rem" />
            <AboutBox>
                <AboutImg src={AboutIcon2} />
                <Abouth3>Word</Abouth3>
                <Abouth4>Eget imperdiet</Abouth4>
                <Abouthr></Abouthr>
                <AboutP>Luctus eget neque eget scelerisque. Sapien ut scelerisque sagittis hac viverra dui.</AboutP>
            </AboutBox>
            <AboutBox>
                <AboutImg src={AboutIcon3} />
                <Abouth3>Miracle</Abouth3>
                <Abouth4>Eget imperdiet</Abouth4>
                <Abouthr></Abouthr>
                <AboutP>Luctus eget neque eget scelerisque. Sapien ut scelerisque sagittis hac viverra dui.</AboutP>
            </AboutBox>
        </AboutWhite>
        <AboutColor>
            <Abouth2>About</Abouth2>
            <AboutSpan>Spirit Life Convetion</AboutSpan>
            <AboutP2>Spirit Life convention is an annual convocation of saints, for a renewing and refreshing and strengthening of our convictions to enable us contend for the faith that was delivered to us.</AboutP2>
            <AboutP2>These days of fellowship in the spirit is characterized by insight into Divine mysteries, a palpable presence of God, that does not leave anyone same way they came and most of all the out pouring of the holy spirit as captured in the old testament Joel 2:28 and a first installment experience in the new convenent Acts 2.</AboutP2>
            <AboutP2>
                I these days as the lord has promised, we will experience even more than what we have read in the scriptures.
            </AboutP2>
            <AboutP2>
                It is a must attend, if we must shape the coming events and sustain that which we have receivedof the lord.
            </AboutP2>
            <AboutP2>Blessings<br />
            Pastor Dafe Richard</AboutP2>
        </AboutColor>
    </AboutContainer>
}