import React, { memo } from 'react';
import {
  CardPost,
  Title,
  SeparatorLine,
  BodyText,
} from './styles';

interface IPost {
  post: {
    title: string;
    body: string;
  }
}

export const PostCard = memo(({ post }: IPost) => {
  return (
    <CardPost>
      <Title>{post.title}</Title>
      <SeparatorLine />
      <BodyText>{post.body}</BodyText>
    </CardPost>
  );
});
