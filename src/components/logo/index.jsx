import React from "react"
import styled from "styled-components"
import { theme } from "../../theme";
import PneumaLogo from "../../assets/logo/pneuma_logo.png"

const LogoContainer = styled.div`
    font-size: .8rem;
    color: ${theme.secondary};
    margin-right: 13rem;

    @media screen and (max-width: 770px){
        margin-right: 0;
    }
`;

const LogoImage = styled.img`
    width: 3rem;

    @media screen and (max-width: 770px){
        width: 2.5rem;
    }
`;

export function Logo(props) {
    return <LogoContainer>
        <LogoImage src={PneumaLogo} />
    </LogoContainer>
}