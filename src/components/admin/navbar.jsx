import React from 'react'
import styled from "styled-components"
import PneumaLogo from "../../assets/logo/pneuma_logo.png"

const NavContainer = styled.div``;

const NavLogo = styled.div``;

const NLogoImg = styled.img``;

const NLogoText = styled.span``;

const NavProfile = styled.div``;

const NavProImg = styled.img``;

const NavProText = styled.p``;

export default function Navbar(props) {
    return (
        <>
            
            <NavContainer>
                <NavLogo>
                    <NLogoImg src={PneumaLogo} />
                    <NLogoText>Pneuma Life City Church</NLogoText>
                </NavLogo>
                <NavProfile>
                    <NavProImg src={PneumaLogo} />
                    <NavProText></NavProText>
                </NavProfile>
            </NavContainer>

        </>
    )
}
