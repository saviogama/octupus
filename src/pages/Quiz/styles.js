import styled from 'styled-components/native';

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1px;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: #121212;
`;

export const View = styled.View`
    flex: 1;
    background-color: #121212;
`;

export const Content = styled.View`
    align-items: center;
`;

export const Text = styled.Text`
    margin-top: ${props => props.topSize};
    margin-bottom: ${props => props.bottomSize};
    margin-left: ${props => props.leftSize};
    margin-right: ${props => props.rightSize};
    font-size: ${props => props.fontSize};
    color: rgba(255, 255, 255, 0.9);
`

export const Image = styled.Image`
    resizeMode: contain;
    width: 250px;
    height: 250px;
    margin-top: 1px;
    margin-bottom: 1px;
`

export const Button = styled.TouchableOpacity`
    margin-top: ${props => props.topSize};
    margin-bottom: ${props => props.bottomSize};
    margin-left: ${props => props.leftSize};
    width: ${props => props.widthSize};
    height: 50px;
    background-color: #272727;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    textAlign: center;
`;