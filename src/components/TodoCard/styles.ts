import styled from "styled-components/native";
import { theme } from '../../themes';

interface IProps {
  isChecked: boolean;
}

export const CardTodo = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 8px 25px 0 16px;
  margin: 5px 0;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
})<IProps>`
  font-size: 16px;
  font-weight: 400;
  margin-left: 5px;
  text-decoration: ${props => props.isChecked ? 'line-through' : 'none'};
  color: ${props => props.isChecked ? 'gray': theme.text};
`;
