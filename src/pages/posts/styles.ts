import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../themes';

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

export const ListPosts = styled.FlatList.attrs({
  windowSize: 10,
  initialNumToRender: 3,
  removeClippedSubviews: true,
  contentContainerStyle: { paddingVertical: 16 },
  showsVerticalScrollIndicator: false
})``;
