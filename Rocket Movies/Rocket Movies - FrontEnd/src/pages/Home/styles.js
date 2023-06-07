import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'div'
    'content';

  grid-template-rows: 132px 120px auto;
  > div:first-of-type {
    grid-area: div;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 40px auto;

    width: 90%;

    > h1 {
      font-weight: 400;
      font-size: 32px;
    }

  }

  > main {
    overflow-y: auto;
    width: 90%;
    margin: 0 auto;
    padding-right: 0.8rem;

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
  
`;