import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Button, TextButton } from './styles';

export default function Home() {
    const navigation = useNavigation();

    function navigateToQuiz() {
        navigation.navigate('Quiz');
    }

    return (
        <View>
            <Text topSize={'30px'} bottomSize={'5px'} fontSize={'18px'}>Metal Gear Quiz</Text>
            <Text topSize={'5px'} bottomSize={'30px'} fontSize={'14px'}>Teste os seus conhecimentos sobre a série de jogos criada por Hideo Kojima</Text>
            <Image source={require('../../assets/logo-mgs.png')} />
            <Button onPress={navigateToQuiz}>
                <TextButton>Iniciar</TextButton>
            </Button>
        </View>
    );
}