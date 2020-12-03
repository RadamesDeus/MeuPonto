import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, TextoBotao } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container {...props}>
    <TextoBotao>{children}</TextoBotao>
  </Container>
);

export default Button;
