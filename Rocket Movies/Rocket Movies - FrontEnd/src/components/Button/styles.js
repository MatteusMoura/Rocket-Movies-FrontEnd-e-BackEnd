import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BLACK};

    height: 56px;
    border: none;
    padding: 0 16px;
    margin-top: 14px;
    border-radius: 10px;
    font-weight: 700;

    &:disabled {
        opacity: 0.5;
    }

`