import React from "react"
import styled from "styled-components"
import { theme } from "../../theme";

const LogoContainer = styled.div`
    font-size: .8rem;
    color: ${theme.secondary};
`;

export function Logo(props) {
    return <LogoContainer>
        <h1>SLC</h1>
    </LogoContainer>
}