import React from "react"
import styled from "styled-components";
//import { theme } from "../../theme"

const ButtonWrapper = styled.button`
    padding: 8px 8px;
    border-radius: .7rem;
    font-size: 16px;
    background-image: linear-gradient(to left, #801A49, #EE8A51);
    color: #fff;
    font-weight: bold;
    outline: none;
    border: none;
`;

export function Button(props) {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}