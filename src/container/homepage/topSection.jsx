import React from "react"
import styled from "styled-components"
import BackgroundImage from "../../assets/images/background.png"
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";

const TopContainer = styled.div`
    width: 100%;
    height: 90vh;
    padding: 0;
    background-image: url(${BackgroundImage})
`;

const TopCenter = styled.div`
    width: 40%;
    margin: auto;    
    padding: 8rem 0;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 450px){
        width: 85%;
        padding: 4rem 0;
    }
`;

const TopHeader = styled.h1`
    font-size: 50px;

    @media screen and (max-width: 450px){
        font-size: 30px;
    }    
`;

const TopContent = styled.p`
    font-size: 20px;

    @media screen and (max-width: 450px){
        font-size: 18px;
    }
`;

const TopButton = styled.button`
    position: absolute;
    left: 88%;
    top: 85%;
    background: none;
    border: none;

    @media screen and (max-width: 450px){
        left: 60%;
    }
`;

export function TopSection(props) {
    return <TopContainer>
        <TopCenter>
            <TopHeader>Dictum nulla id sed arcu</TopHeader>
            <Marginer direction = "vertical" margin= "3rem" />
            <TopContent>Risus, egestas dui sit vulputate enim ornare morbi enim, congue. Libero hendrerit purus orci tellus pretium vel lacus augue arcu. Eu mauris a, id scelerisque quis ipsum. In iaculis non praesent turpis. Sagittis urna vel bibendum ornare gravida lectus diam.</TopContent>
        </TopCenter>
        <Marginer direction = "vertical" margin= "8rem" />
        <TopButton>
            <Button>Register for SLC</Button>
        </TopButton>
    </TopContainer>
}