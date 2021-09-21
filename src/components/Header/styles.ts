import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: ${props => props.theme.colors.surface};
  margin-bottom: 15px;
`;
