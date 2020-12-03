import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import Context from './context';
import 'moment/locale/pt-br';
import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Context>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#1C2D15" />
        <Container>
          <Routes />
        </Container>
      </NavigationContainer>
    </Context>
  );
};

export default App;
