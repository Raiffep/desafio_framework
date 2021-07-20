import React from 'react';
import { Container } from './styles';

const Header: React.FC = ({ rightComponent }: any) => {
  return (
    <Container>
      {rightComponent}
    </Container>
  );
}

export default Header;
