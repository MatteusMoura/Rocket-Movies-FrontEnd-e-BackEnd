import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 2.4rem;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.DARK};
    padding: 1.6rem;
    border-radius: 0.8rem;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
  }
`;