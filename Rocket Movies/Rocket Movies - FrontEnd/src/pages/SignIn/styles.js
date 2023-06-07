import styled from "styled-components";
import backgroundImg from '/src/assets/wallpaper.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;


    > h1 {
        font-size: 48px;
        line-height: 63px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > h2 {
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 38px 0px;
    }
    > p {
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
    > a {
        margin: 42px auto;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
        line-height: 21px;
    }
    Input {
        
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`