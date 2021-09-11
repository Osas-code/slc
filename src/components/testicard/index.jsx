import React from "react"
import styled from "styled-components"
import { theme } from "../../theme";

const CardContainer = styled.div`
    background: #C4C4C4;
    width: 350px;
    height: 550px;
    box-shadow: 0px 4px 4px rgba(17, 0, 0, 0.2);
    border-radius: 3px;
    margin: 5rem 0;
    padding: 2rem;
`;

const TestiText = styled.div`
    font-size: 18px;
`;

const TestiDetails = styled.div`
    margin: 3.5rem 0;
    color: ${theme.primary};
`;

export function TestiCard(props) {
    const { testiText, testiName } = props;
    return <CardContainer>
        <TestiText>{ testiText }</TestiText>
        <TestiDetails>{ testiName }</TestiDetails>
    </CardContainer>
}