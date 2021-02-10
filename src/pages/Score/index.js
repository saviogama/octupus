import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, TextButton, Content } from './styles';

export default function Score() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View>
            <Image source={require('../../assets/score.png')} />
            <Content>
                <Text topSize={'5px'} bottomSize={'5px'} fontSize={'36px'}>Resultado</Text>
                <Text topSize={'5px'} bottomSize={'30px'} fontSize={'24px'}>80% de acertos</Text>
                <Text topSize={'30px'} bottomSize={'5px'} fontSize={'16px'}>Teste concluido com sucesso!</Text>
                <Text topSize={'5px'} bottomSize={'5px'} fontSize={'16px'}>Das 15 perguntas, 9 das suas respostas estavam corretas.</Text>
            </Content>
            <Button onPress={navigateToHome}>
                <TextButton>Início</TextButton>
            </Button>
        </View>
    );
}