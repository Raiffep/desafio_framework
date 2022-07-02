import React, { ReactNode } from 'react';
import { Container } from './styles';
interface IHeaderProps {
  children: ReactNode
}

export const Header = ({ children }: IHeaderProps) => {
  return (
    <Container>{children}</Container>
  );
};
