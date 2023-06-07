import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 0 10px;
    align-items: center;
    margin-bottom: 7px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 10px;
    
    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        outline: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }
        > svg {
            margin-left: 16px;
        }
    }
`