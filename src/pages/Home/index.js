import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, TextButton } from './styles';

export default function Home() {
    const navigation = useNavigation();

    function navigateToQuiz() {
        navigation.navigate('Quiz');
    }

    return (
        <View paddingSize={StatusBar.currentHeight}>
            <Text topSize={'5px'} bottomSize={'5px'} fontSize={'18px'}>Metal Gear Quiz</Text>
            <Text topSize={'5px'} bottomSize={'5px'} fontSize={'14px'}>Teste os seus conhecimentos sobre a série de jogos criada por Hideo Kojima</Text>
            <Image source={require('../../assets/logo-mgs.png')} />
            <Text topSize={'5px'} bottomSize={'35px'} fontSize={'12px'}>O quiz consiste de 15 perguntas, cada uma com 5 alternativas. Basta clicar em uma das alternativas e você será levado à próxima pergunta. O teste possui o tempo máximo de 10 minutos e, ao final do teste ou do tempo, será exibido o seu resultado.</Text>
            <Button onPress={navigateToQuiz}>
                <TextButton>Iniciar</TextButton>
            </Button>
        </View>
    );
}