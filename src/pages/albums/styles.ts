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

export const BodyPosts = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const CardPost = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  margin: 5px 0;
  background-color: ${theme.surface};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.text};
`;

export const BodyText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.text};
`;
