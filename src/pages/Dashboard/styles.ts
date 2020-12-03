import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #28262e;
    padding: 0 20px;
    height: 104px;
`;

export const TextTitle = styled.Text`
    color: #999591;
    margin-bottom: 10px;
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
`;
export const TextName = styled.Text`
    color: #ff9000;
    font-size: 20px;
    font-family: 'RobotoSlab-Medium';
`;
export const ImageProfile = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 28px;
`;
export const Content = styled.View`
    padding: 0 20px;
    flex: 1;
`;
export const Title = styled.Text`
    color: #f4ede8;
    margin: 15px 0;
    font-size: 28px;
    font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(IconFeather)`
    color: #ff9000;
    margin-right: 16px;
`;
