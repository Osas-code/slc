import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
    background: #801A49;
`;

const FooterWidth = styled.div`
    width: 85%;
    margin: auto;
    padding: 1rem 0;
    color: #fff;
`;

const FooterLeft = styled.div`
    font-size: 9px;
`;

const FooterRight = styled.div``;

export function Footer(props) {
    return <FooterContainer>
        <FooterWidth>
            <FooterLeft>© 2021 by Pneuma Life City Church</FooterLeft>
            <FooterRight></FooterRight>
        </FooterWidth>
    </FooterContainer>
} 