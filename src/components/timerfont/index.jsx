import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const TimerSize = styled.div`
    font-size: ${({ small }) => small ? '1px' : '3rem'};

    @media screen and (max-width: 450px){
        font-size: ${({ small }) => small ? '1px' : '1.3rem'};
    }
`;

export function Timer(props) {
    return <TimerSize {...props}>{props.children}</TimerSize>;
}