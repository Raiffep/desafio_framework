import styled from 'styled-components/native';
import { theme } from '../../themes';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${theme.primary};
  elevation: 10;
`;
