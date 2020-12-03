import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Titulo = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const UserImageStyle = styled.Image`
  height: 50px;
  width: 50px;
`;

export const EsqueciSenha = styled.TouchableOpacity`
  margin-top: 60px;
`;
export const EsqueciSenhaTexto = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const CriarConta = styled.TouchableOpacity`
  margin-top: 60px;
  flex-direction: row;
  height: 60px;
  background: #312e38;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #122129;
`;
export const CriarContaTexto = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
`;
export const Icon = styled(IconFeather)`
  color: #ff9000;
  margin-right: 16px;
`;
