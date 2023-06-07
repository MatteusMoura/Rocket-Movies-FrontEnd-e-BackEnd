import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    'header'
    'content';

    > main {
        grid-area: content;
        overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
        /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK}; 
      border-radius: 10px;
    }
    }

`;
export const Form = styled.form`
    max-width: 1137px;
    margin: 40px auto;

    h1 {
        
      color: ${({ theme }) => theme.COLORS.WHITE };
      font-size: 36px;
      line-height: 47px;
      margin-bottom: 40px;
    }
    
    > header {
      a {
        color: ${({ theme }) => theme.COLORS.PINK };
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 24px;
    }
    }
    
    > div:nth-child(1) {
        display: flex;
        gap: 40px;
    }

    > h2 {
        font-size: 20px;
        line-height: 26px;
        color: ${({ theme }) => theme.COLORS.GRAY_300 };
        margin-bottom: 24px;
    }
    .bookmarks {
        background-color: ${({ theme }) => theme.COLORS.DARK};
        display: flex;
        padding: 10px 20px;
        border-radius: 10px;
        gap: 24px;  
    }
    .buttons {
        margin-top: 40px;
        display: flex;
        width: 100%;
        gap: 40px;
        justify-content: space-around;

        button:nth-child(1){
            background-color:${({ theme }) => theme.COLORS.DARK};
            color:${({ theme }) => theme.COLORS.PINK}
        }
    }

`