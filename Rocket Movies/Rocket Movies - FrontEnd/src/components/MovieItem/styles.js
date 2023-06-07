import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_GRAY};
    border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.BACKGROUND_GRAY}` : 'none'};

    border-radius: 10px;
    padding: 0 16px;

    > input {
        height: 56px;
        max-width: 100px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background-color: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300 };
        }

        &:focus {
            outline: none;
        }
    }

    > button {
        border: none;
        background: none;
    }

    > button svg {
        color: ${({ theme }) => theme.COLORS.PINK}
    }
`