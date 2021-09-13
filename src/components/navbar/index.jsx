import React, { useState } from 'react'
import styled from "styled-components"
import { theme } from '../../theme';
import { Button } from '../button';
import { CountDownTimer } from '../countdown';
import { Logo } from '../logo';
import { Marginer } from '../marginer'
import { FaBars, FaTimes } from 'react-icons/fa'
import { scroller } from 'react-scroll';

const NavbarContainer = styled.div`
    width: 100%;
    background: #fff;
    padding: .8rem 0;
`;

const NavbarWidth = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: auto;

    .Navmenu{
        display: flex;
        align-items: center;
        list-style: none;
        text-transform: uppercase;
        font-size: 1rem;
    }

    @media screen and (max-width: 770px){
        justify-content: space-between;

        .Navmenu{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 50vh;
            position: absolute;
            top: 60px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
            padding: 4rem 0;
        }

        .Active{
            background: #fff;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        }
    }
`;

const NavbarLinks = styled.ul`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 770px){
        display: none;
    }

    @media screen and (max-width: 450px){
        display: none;
    }
`;

const NavbarLinkLi = styled.li`
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    ::hover{
        
    }
`;

const NavbarLinka = styled.a`
    pointer: cursor;
`;

export const MenuIcon = styled.div`
    color: ${theme.secondary};
    display: none;

    @media screen and (max-width: 450px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export function Navbar(props){

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const scrollToAbout = () => {
        scroller.scrollTo('aboutsection', { smooth: true, duration: 1500});
    };
    const scrollTotest = () => {
        scroller.scrollTo('testimony', { smooth: true, duration: 1500});
    };
    const scrollTocontact = () => {
        scroller.scrollTo('contact', { smooth: true, duration: 1500});
    };
    const scrollToreg = () => {
        scroller.scrollTo('registration', { smooth: true, duration: 1500});
    };

    return <NavbarContainer>
        <NavbarWidth>
            <Logo />
            <Marginer direction = 'horizontal' margin="15rem" />
            <NavbarLinks className={click ? 'Navmenu Active' : 'NavMenu'}>
                <NavbarLinkLi onClick={scrollToAbout}>
                    About SLC
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
                <NavbarLinkLi onClick={scrollTotest}>
                    Testimonials
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
                <NavbarLinkLi onClick={scrollTocontact}>
                    Contact
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
                <NavbarLinkLi onClick={scrollToreg}>
                    <Button>Register for SLC</Button>
                </NavbarLinkLi>
                <Marginer direction = 'horizontal' margin="3rem" />
            </NavbarLinks>
            <CountDownTimer/>
            <Marginer direction = 'horizontal' margin="10rem" />
            <MenuIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>
        </NavbarWidth>
    </NavbarContainer>
}