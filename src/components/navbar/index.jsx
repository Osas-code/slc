import React from 'react'
import styled from "styled-components"
import { Button } from '../button';
import { CountDownTimer } from '../countdown';
import { Logo } from '../logo';
import { Marginer } from '../marginer'

const NavbarContainer = styled.div`
    width: 100%;
    background: #fff;
    padding: .8rem 0;
`;

const NavbarWidth = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
`;

const NavbarLinks = styled.ul`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 450px){
        display: none;
    }
`;

const NavbarLinkLi = styled.li`
    list-style: none;
    font-size: 18px;
    font-weight: 600;
`;

export function Navbar(props){
    return <NavbarContainer>
        <NavbarWidth>
            <Logo />
            <Marginer direction = 'horizontal' margin="15rem" />
            <NavbarLinks>
                <NavbarLinkLi>
                    About SLC
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
                <NavbarLinkLi>
                    Testimonials
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
                <NavbarLinkLi>
                    Contact
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
                <NavbarLinkLi>
                    <Button>Register for SLC</Button>
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
            </NavbarLinks>
            <CountDownTimer/>
        </NavbarWidth>
    </NavbarContainer>
}