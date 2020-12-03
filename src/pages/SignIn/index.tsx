import React, { useCallback, useRef } from 'react';
import { Image, ScrollView, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
// import * as Yup from 'yup';

// import getValidationErros from '../../utils/getValidationErros';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/logo.png';
import Imput from '../../components/Input';
import Button from '../../components/Button';

import { Container, Titulo } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { CtxSignIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSingIn = useCallback(
    async (data: SignInFormData) => {
      console.log('SignIn');

      const { email, password } = data;
      console.log('SignIn email', email);
      console.log('SignIn password', password);
      CtxSignIn({ email, password });
    },
    [CtxSignIn],
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Container>
          <Image source={Logo} />
          <Titulo>Meu Ponto</Titulo>
          <Form ref={formRef} onSubmit={handleSingIn}>
            <Imput
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail"
              name="email"
              placeholder="E-mail"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Imput
              ref={passwordInputRef}
              icon="lock"
              name="password"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignIn;
