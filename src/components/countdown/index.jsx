import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import { Marginer } from "../marginer"

const CountContainer = styled.div`
    width: 20%;
`;

const TimerContainer = styled.div`
    
`;

const Timer = styled.div`
    display: flex;
`;

const TimerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TimerP = styled.p`
    font-size: 6rem;

    @media screen and (max-width: 770px) {
        font-size: 2.7rem;
    }
`;

const TimerSpan = styled.div`
    font-size: 1.5rem;
    @media screen and (max-width: 770px) {
        font-size: .7rem;
    }
`;

const TimerCol = styled.div`
    font-size: 6rem;
    margin: 0 2rem;

    @media screen and (max-width: 770px) {
        font-size: 2.7rem;
        margin: 0 1rem;
    }
`;

export function CountDownTimer(props) {
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

    return <CountContainer {...props}>
        <TimerContainer>
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
        </TimerContainer>
    </CountContainer>
}