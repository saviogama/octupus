import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, TextButton, Content } from './styles';

export default function Score({ route }) {
    const { score } = route.params;
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View paddingSize={StatusBar.currentHeight}>
            <Image source={require('../../assets/score.png')} />
            <Content>
                <Text topSize={'5px'} bottomSize={'5px'} fontSize={'36px'}>Resultado</Text>
                <Text topSize={'5px'} bottomSize={'30px'} fontSize={'24px'}>{((score * 100) / 15).toFixed(2)}% de acertos</Text>
                <Text topSize={'30px'} bottomSize={'5px'} fontSize={'16px'}>Teste concluido com sucesso!</Text>
                <Text topSize={'5px'} bottomSize={'5px'} fontSize={'16px'}>Das 15 perguntas, {score} das suas respostas estavam corretas.</Text>
            </Content>
            <Button onPress={navigateToHome}>
                <TextButton>Início</TextButton>
            </Button>
        </View>
    );
}