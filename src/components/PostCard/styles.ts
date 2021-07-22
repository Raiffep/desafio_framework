import styled from "styled-components/native";
import { theme } from "../../themes";

export const CardPost = styled.View`
  width: 96%;
  align-self: center;
  height: 200px;
  border-radius: 8px;
  padding: 10px 16px;
  margin: 10px 0;
  elevation: 10;
  background-color: ${theme.background};
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.text};
`;

export const SeparatorLine = styled.View`
  width: 100%;
  height: 1px;
  margin: 5px 0;
  background-color: ${theme.surface};
`;

export const BodyText = styled.Text.attrs({
  numberOfLines: 6
})`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  color: ${theme.text};
`;
