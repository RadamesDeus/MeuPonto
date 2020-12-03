import React from 'react';

import { Text, TouchableOpacityProps, View } from 'react-native';
import {
  Appointment,
  AppointmentImage,
  AppointmentTitle,
  AppointmentDesc,
  TextHora,
  Icon,
} from './styles';

interface Provider {
  id: string;
  name: string;
  email: string;
  date: Date;
  avatar: string;
  avatar_url: string;
}

interface ProviderProps extends TouchableOpacityProps {
  provider: Provider;
}

const ProviderItem: React.FC<ProviderProps> = ({ children, ...props }) => {
  const { provider } = props;
  return (
    <Appointment {...props}>
      {provider.avatar_url ? (
        <AppointmentImage
          source={{
            uri: provider.avatar_url,
          }}
        />
      ) : (
        <Icon name="user" size={56} />
      )}
      <View>
        <AppointmentTitle>{provider.name}</AppointmentTitle>
        <AppointmentDesc>
          <Icon name="calendar" size={20} />
          <TextHora>Segunda à sexta</TextHora>
        </AppointmentDesc>
        <AppointmentDesc>
          <Icon name="clock" size={20} />
          <TextHora>8h às 18h</TextHora>
        </AppointmentDesc>
      </View>
    </Appointment>
  );
};

export default ProviderItem;
