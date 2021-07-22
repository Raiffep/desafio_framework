import styled from 'styled-components/native';
import { theme } from '../../themes';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.surface};
`;

export const BodyTodos = styled.View`
  flex: 1;
`;

export const SeparatorLine = styled.View`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background-color: ${theme.surface};
`;

