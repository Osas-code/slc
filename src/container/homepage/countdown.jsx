import React from "react"
import styled from "styled-components"
import { theme } from "../../theme"
import { Marginer } from "../../components/marginer"
import { CountDownTimer } from "../../components/countdown";
import { Timer } from "../../components/timerfont";

const CountContainer = styled.div`
    background: ${theme.primary};
    padding: 3rem 0;
    color: #fff;
`;

const CountWidth = styled.div`
    width: 85%;
    margin: auto;

    @media screen and (max-width: 450px){
        
    }
`;

const CountDownTitle = styled.h1`
    font-weight: 500;
`;

const ContactForm = styled.form`
    width: 50%;
    margin: auto;
    padding: 2rem 0;

    @media screen and (max-width: 450px){
        width: 100%;
    }
`;

const CFormDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CFormInput = styled.input`
    width: 100%;
    padding: .8rem;
    border: .5px solid white;
    border-radius: 3px;
    background: none;
`;

const CFormButton = styled.input`
    width: 100%;
    padding: .6rem;
    background: #fff;
    border: none;
    border-radius: 3px;
    color: ${theme.primary};
`;

export function CountDown(props) {
    return <CountContainer>
        <CountWidth>
            <CountDownTitle>
                COUNT DOWN<br />
                TO SPIRIT LIVE CONVENTION
            </CountDownTitle>
            <Marginer direction="vertical" margin="3rem" />
            <Timer>
                <CountDownTimer />
            </Timer>
            <Marginer direction = "vertical" margin = "3rem" />
            <ContactForm>
                <CFormDiv>
                    <CFormInput type="text" id="fname" name="fname" placeholder="First name" />
                    <Marginer direction = "horizontal" margin = "1rem" />
                    <CFormInput type="text" id="lname" name="lname" placeholder="Last name" />
                </CFormDiv>
                <Marginer direction = "vertical" margin = "1rem" />
                <CFormInput type="email" id="email" name="email" placeholder="Email address" />
                <Marginer direction = "vertical" margin = "1rem" />
                <CFormButton type="button" id="submit" name="submit" value="Register for SLC" />
        </ContactForm>
        </CountWidth>
    </CountContainer>
}