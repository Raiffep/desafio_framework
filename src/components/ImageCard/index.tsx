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

export const ImageCard = memo(({ item }: IPost) => {
  return (
    <ContainerCard>
      <Title>{item.title}</Title>
    </ContainerCard>
  );
})
