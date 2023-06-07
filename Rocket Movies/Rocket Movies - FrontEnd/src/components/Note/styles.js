import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_WINE};

  border: none;
  outline: none;
  border-radius: 1.6rem;

  padding: 16px 20px;
  margin-bottom: 20px;

  width: 100%;

  text-align: start;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 0.8rem;
  }
  > ul svg {
    font-size: 1.2rem;
  }

  .description {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 1.5rem 0 2.4rem;
  }

  .description > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .tags > span {
    display: inline-block;
    background-color: #312e38;
    color: #e5e5e5;
    margin-top: 0.8rem;
  }
`;