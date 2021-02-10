import styled from 'styled-components/native';


export const View = styled.View`
    flex: 1;
    paddingTop: ${props => props.paddingSize};
    align-items: center;
    justify-content: center;
    background-color: #121212;
`;

export const Text = styled.Text`
    margin-top: ${props => props.topSize};
    margin-bottom: ${props => props.bottomSize};
    margin-left: 5px;
    margin-right: 5px;
    font-size: ${props => props.fontSize};
    textAlign: center;
    color: rgba(255, 255, 255, 0.9);
`

export const Image = styled.Image`
    resizeMode: center;
    width: 95%;
    margin-top: 60px;
    margin-bottom: 60px;
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