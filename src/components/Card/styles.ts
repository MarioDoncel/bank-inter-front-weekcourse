import styled, { css } from 'styled-components'

export const CardContainer = styled.div<{
    width: string;
    height: string;
    noShadow: boolean;
    }>`
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        background: ${({theme}) => theme.colors.background};

        ${(props) => !props.noShadow && css`
        box-shadow: 4px 4px 8px -4px rgba(0,0,0,0.4);
        `}
        border-radius: 2.0rem;
        padding: 2.0rem;

        display: flex;
        align-items: center;
        flex-direction: column;
;
    `