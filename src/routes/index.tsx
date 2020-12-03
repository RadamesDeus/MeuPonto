import 'react-native-gesture-handler';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../context/AuthContext';

import AppRoutes from './app.router';
import AuthRoutes from './auth.router';

const Router: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#312e38',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return user ? <AppRoutes /> : <AuthRoutes />;
};
export default Router;
