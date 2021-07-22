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

const PostCard = ({ post }: IPost) => {
  return (
    <CardPost>
      <Title>{post.title}</Title>
      <SeparatorLine />
      <BodyText>{post.body}</BodyText>
    </CardPost>
  );
}

export default memo(PostCard);
