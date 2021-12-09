import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 46px;

    background: ${({theme})=> theme.colors.background};
    border: 1px solid ${({theme})=> theme.colors.primary};
    border-radius: 10px;

    margin-bottom: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
        font-size: 1.2rem;
        font-weight: 400;
        width: 100%;
        margin: 0 2rem;
    }
    `