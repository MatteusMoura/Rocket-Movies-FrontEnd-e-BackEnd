import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'div'
    'content';
  grid-template-rows: 136px 65px auto;

  > div {
    
    grid-area: div;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  > main {
    overflow-y: auto;
    width: 80%;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK}; 
      border-radius: 10px;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  margin: 0 auto 40px;

  > header {
    margin-bottom: 24px;

    > div {
      display: flex;
      align-items: center;
    }

    > div:first-of-type {
      gap: 19px;
      margin-bottom: 24px;

      h1 {
        font-weight: 500;
        font-size: 36px;
      }

      svg {
        width: 15px;
        height: 15px;
      }
    }

    > div:last-of-type {
      gap: 0.8rem;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      span {
        font-size: 16px;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  > div:not(:empty) {
    max-width: 100%;
    overflow: auto;
    height: 40px;
  }

  > article {
    margin-top: 40px;

    p {
      font-size: 16px;
      text-align: justify;
      line-height: 21px;
      margin-bottom: 24px;
    }
  }
`;