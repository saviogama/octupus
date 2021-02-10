import styled from 'styled-components/native';

export const View = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #121212;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin: 25px;
    background-color: #272727;
    border-radius: 10px;
`;

export const Text = styled.Text`
    margin-top: ${props => props.topSize};
    margin-bottom: ${props => props.bottomSize};
    font-size: ${props => props.fontSize};
    textAlign: center;
    color: rgba(255, 255, 255, 0.9);
`

export const Image = styled.Image`
    resizeMode: contain;
    width: 95%;
    height: 10%;
    margin-top: 15px;
    margin-bottom: 50px;
`

export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 150px;
    height: 50px;
    background-color: #272727;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
`;