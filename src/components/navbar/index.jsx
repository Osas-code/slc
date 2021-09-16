import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from "styled-components"
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
    box-shadow: 0 2px 19px #0000000F;
    padding: .8rem 0;
    position: fixed;
    top: 0;
    z-index: 999;
`;

const NavbarWidth = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: space between;
    flex-wrap: wrap;
    align-items: center;

    .Navmenu{
        display: flex;
        align-items: center;
        list-style: none;
        text-transform: uppercase;
        font-size: 1rem;
    }

    @media screen and (max-width: 770px){
        width: 90%;
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

    @media screen and (max-width: 770px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const Timer = styled.div`
    display: flex;

    @media screen and (max-width: 770px) {
        margin: 0 7rem 0 0;
    }
`;

const TimerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TimerP = styled.p`
    font-size: 1rem;

    @media screen and (max-width: 770px) {
        font-size: 1.5rem; 
    }
`;

const TimerSpan = styled.div`
    font-size: .8rem;

    @media screen and (max-width: 770px) {
        font-size: .5rem;
    }
`;

const TimerCol = styled.div`
    font-size: 1.5rem;
    margin: 0 1.2rem;

    @media screen and (max-width: 770px) {
        font-size: 1.5rem; 
        margin: 0 .5rem;
    }
`;

const CountdownWidth = styled.div`
    width: 20%;
    font-size: 1rem;
`;

export function Navbar(props){
    const { small } = props;

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


    //timer

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('November 5, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop timer
                clearInterval(interval.current);
            }else{
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });


    return <NavbarContainer>
        <NavbarWidth>
            <Logo />
            <Marginer direction = 'horizontal' margin="rem" />
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
            <Timer>
                <TimerDiv>
                    <TimerP>{timerDays}</TimerP>
                    <TimerSpan>Days</TimerSpan>
                </TimerDiv>
                <Marginer direction="horizontal" margin=".2rem" />
                <TimerCol>:</TimerCol>
                <Marginer direction="horizontal" margin=".2rem" />
                <TimerDiv>
                    <TimerP>{timerHours}</TimerP>
                    <TimerSpan>Hours</TimerSpan>
                </TimerDiv>
                <Marginer direction="horizontal" margin=".2rem" />
                <TimerCol>:</TimerCol>
                <Marginer direction="horizontal" margin=".2rem" />
                <TimerDiv>
                    <TimerP>{timerMinutes}</TimerP>
                    <TimerSpan>Minutes</TimerSpan>
                </TimerDiv>
                <Marginer direction="horizontal" margin=".2rem" />
                <TimerCol>:</TimerCol>
                <Marginer direction="horizontal" margin=".2rem" />
                <TimerDiv>
                    <TimerP>{timerSeconds}</TimerP>
                    <TimerSpan>Seconds</TimerSpan>
                </TimerDiv>
            </Timer>

            <MenuIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>
        </NavbarWidth>
    </NavbarContainer>
}