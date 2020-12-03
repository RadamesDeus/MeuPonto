import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import Button from '../../components/Button';
import ProviderItem from '../../components/ProviderItem';
import {
  Container,
  Header,
  TextTitle,
  TextName,
  Content,
  Title,
  ImageProfile,
  Icon,
} from './styles';

interface Providers {
  id: string;
  name: string;
  email: string;
  date: Date;
  avatar: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { user, SignOut } = useAuth();
  const [userImage, setUserImage] = useState<Image | null>(null);

  useEffect(() => {
    console.log('Dashboard', user);
  }, [user]);

  const handlePonto = useCallback(async () => {
    console.log('#########################');
    console.log('handlePonto');

    api
      .post(`Dimep/Ponto/BuscarApontamentos`, {
        Week: user.Week,
        IdPessoa: user.IdPessoa,
        IdPeriodo: user.IdPeriodo,
        IdPessoaCripto: user.IdPessoaCripto,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user]);

  return (
    <Container>
      <Header>
        <View>
          <TextTitle>Bem Vindo,</TextTitle>
          <TextName>{user.name}</TextName>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('/');
          }}
        >
          {!user.avatar_url ? (
            <Icon name="user" size={56} />
          ) : (
            <ImageProfile
              source={{
                uri: `${Platform.OS === 'android' ? 'file://' : ''}${
                  user.avatar_url
                }`,
              }}
            />
          )}
        </TouchableOpacity>
      </Header>

      <Button onPress={handlePonto}>Ponto</Button>
      <Button onPress={SignOut}>Sair</Button>
    </Container>
  );
};
export default Dashboard;
