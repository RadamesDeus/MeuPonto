import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  border: 0;
  margin-top: 20px;
  padding: 16px 0;
  width: 100%;
  min-width: 150px;
  margin-left: auto;
  border-radius: 10px;
  background: #ea7b35;
  font-weight: bold;
  color: #333;
`;

export const TextoBotao = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
  text-align: center;
`;
