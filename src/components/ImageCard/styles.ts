import styled from "styled-components/native";
import { theme } from "../../themes";

export const ContainerCard = styled.View`
  width: 48%;
  height: 160px;
  border-radius: 8px;
  padding: 10px 16px;
  margin: 6px 0;
  background-color: ${theme.surface};
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.text};
`;
