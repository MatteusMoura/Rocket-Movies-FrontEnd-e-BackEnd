import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 1px;

  color: ${({ theme }) => theme.COLORS.PINK};
`;