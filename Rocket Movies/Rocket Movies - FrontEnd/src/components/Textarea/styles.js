import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;
    outline: none;

    margin: 30px auto;
    border-radius: 10px;
    padding: 15px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300}
    }
`