import React, { ReactElement } from 'react';
import { Container } from './styles';
interface IHeaderProps {
  rightComponent: ReactElement
}

export const Header = ({ rightComponent }: IHeaderProps) => {
  return (
    <Container>
      {rightComponent}
    </Container>
  );
};
