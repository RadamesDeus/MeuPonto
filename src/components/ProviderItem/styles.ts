import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export const Appointment = styled.TouchableOpacity`
  flex-direction: row;
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 20px;
`;
export const AppointmentImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  margin-right: 20px;
`;

export const AppointmentTitle = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'RobotoSlab-Medium';
`;
export const AppointmentDesc = styled.View`
  background: #3e3b47;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TextHora = styled.Text`
  color: #999591;
  font-size: 16px;
  margin-top: 5px;
  font-family: 'RobotoSlab-Regular';
`;
export const Icon = styled(IconFeather)`
  color: #ff9000;
  margin-right: 16px;
  margin-top: 5px;
`;
