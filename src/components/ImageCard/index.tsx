import React, { memo } from 'react';
import {
  ContainerCard,
  Title
} from './styles';

interface IPost {
  item: {
    title: string;
  }
}

const ImageCard = ({ item }: IPost) => {
  return (
    <ContainerCard>
      <Title>{item.title}</Title>
    </ContainerCard>
  );
}

export default memo(ImageCard);
