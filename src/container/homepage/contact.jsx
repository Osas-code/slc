import React from 'react'
import styled from "styled-components"
import { Marginer } from "../../components/marginer";
import { theme } from "../../theme"
//import FBackgroundImg from '../../assets/images/footerbg.jpg';

const ContactContainer = styled.div`
    width: 85%;
    margin: auto;
    padding: 3rem 0;
`;

const ContactTitle = styled.h1`
    text-align: center;
    font-weight: 400;
`;

const Contacthr = styled.div`
    width: 10%;
    margin: 1rem auto;
    height: .15rem;
    background: ${theme.secondary}
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
    border: .5px solid grey;
    border-radius: 3px;
    background: none;
`;

const CFormButton = styled.input`
    width: 100%;
    padding: .6rem;
    background: ${theme.primary};
    border: none;
    border-radius: 3px;
    color: #fff;
`;

const CFormSpan = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 770px){
        flex-wrap: wrap;
    }
`;

const CFormRadio = styled.input``;

const CFormLabel = styled.p`

`;

export function Contact(props) {
    return <ContactContainer name={"registration"}>
        <ContactTitle>SLC Registration</ContactTitle>
        <Contacthr></Contacthr>
        <ContactForm>
            <CFormDiv>
                <CFormInput type="text" id="fname" name="fname" placeholder="First name" />
                <Marginer direction = "horizontal" margin = "1rem" />
                <CFormInput type="text" id="lname" name="lname" placeholder="Last name" />
            </CFormDiv>
            <Marginer direction = "vertical" margin = "1rem" />
            <CFormInput type="email" id="email" name="email" placeholder="Email address" />
            <Marginer direction = "vertical" margin = "1rem" />
            <CFormInput type="address" id="address" name="address" placeholder="Address" />
            <Marginer direction = "vertical" margin = "1rem" />
            <CFormDiv>
                <CFormInput type="text" id="city" name="city" placeholder="City" />
                <Marginer direction = "horizontal" margin = "1rem" />
                <CFormInput type="text" id="state" name="state" placeholder="State" />
                <Marginer direction = "horizontal" margin = "1rem" />
                <CFormInput type="text" id="country" name="country" placeholder="Country" />
            </CFormDiv>
            <Marginer direction = "vertical" margin = "1rem" />
            <CFormSpan>Not an Akure based, would you like to book an accomodation?
            <Marginer direction = "vertical" margin = "1rem" /> 
                <CFormRadio type="radio" id="accom" name="accomadation" value="yes" />
                <CFormLabel for="male">Yes</CFormLabel>
                <CFormRadio type="radio" id="accom" name="accomadation" value="no" />
                <CFormLabel for="male">No</CFormLabel>
            </CFormSpan>
            <Marginer direction = "vertical" margin = "1rem" />
            <CFormButton type="button" id="submit" name="submit" value="Register for SLC" />
        </ContactForm>
    </ContactContainer>
}