import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme, fonts } from '../../themes';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.background};
`;

export const BodyPosts = styled.View`
  flex: 1;
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

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

export const ViewLoading = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-direction: row;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: theme.primary,
  size: 'large'
})``;

export const LoadingText = styled.Text`
  font-size: 12px;
  color: ${theme.primary};
  margin-left: 10px;
`;
