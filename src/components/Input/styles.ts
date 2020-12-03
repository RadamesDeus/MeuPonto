import styled, { css } from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocus: boolean;
  isError: boolean;
}

interface IconrProps extends ContainerProps {
  isField: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  border: 2px solid #233129;
  ${props =>
    props.isError &&
    css`
      border-color: #c20;
    `}
  ${props =>
    props.isFocus &&
    css`
      border-color: #f48404;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;
export const Icon = styled(IconFeather)<IconrProps>`
  margin-right: 10px;
  ${props =>
    props.isError &&
    css`
      color: #c20;
    `}

  ${props =>
    (props.isFocus || props.isField) &&
    css`
      color: #f48404;
    `}
`;
