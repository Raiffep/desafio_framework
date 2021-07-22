import React, { ReactElement } from 'react';
import { Container } from './styles';
interface IHeaderProps {
  rightComponent: ReactElement
}

const Header = ({ rightComponent }: IHeaderProps) => {
  return (
    <Container>
      {rightComponent}
    </Container>
  );
}

export default Header;
