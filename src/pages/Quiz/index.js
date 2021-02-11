import React, { useState, useContext, useEffect } from 'react';
import { ScrollView, StatusBar, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { View, Text, Image, Button, TextButton, Header, Content } from './styles';
import { questoes } from '../../questoes';
import Context from '../../context';

export default function Quiz() {
    const { currentQuestionData, scoreData, timer, setData, setTimerData, clsData } = useContext(Context);
    const navigation = useNavigation();
    const [currentQuestion, setCurrentQuestion] = useState(currentQuestionData);
    const [score, setScore] = useState(scoreData);
    const [altTimer, setAltTimer] = useState(600);

    const handleOptions = (correto) => {
        if (correto) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questoes.length) {
            setCurrentQuestion(nextQuestion);
            setData(nextQuestion, score);
            setTimerData(altTimer);
        } else {
            clsData();
            navigation.navigate('Score', { score: score });
        }
    };

    return (
        <View paddingSize={StatusBar.currentHeight}>
            <ScrollView>
                <Header>
                    <Text topSize={'5px'} bottomSize={'5px'} leftSize={'0px'} rightSize={'0px'} fontSize={'12px'}>Questão: {currentQuestion + 1}/15</Text>
                    <CountdownCircleTimer
                        onComplete={() => {
                            clsData();
                            navigation.navigate('Score', { score: score });
                        }}
                        isPlaying
                        duration={timer}
                        size={39}
                        strokeWidth={3}
                        colors="#ED1C24"
                    >
                        {({ remainingTime }) => {
                            useEffect(() => {
                                setAltTimer(remainingTime);
                            }, [remainingTime]);
                            return (
                                <Animated.Text style={{ color: '#FFFFFF' }}>
                                    {(Math.floor(remainingTime / 60) + ':' + (remainingTime % 60))}
                                </Animated.Text>
                            )
                        }}
                    </CountdownCircleTimer>
                </Header>
                <Content>
                    <Image source={questoes[currentQuestion].imagem} />
                </Content>
                <Text topSize={'1px'} bottomSize={'20px'} leftSize={'15px'} rightSize={'15px'} fontSize={'16px'}>{questoes[currentQuestion].questao}</Text>
                <Content>
                    {questoes[currentQuestion].opcoes.map((opcao) => (
                        <Button onPress={() => handleOptions(opcao.correto)} topSize={'5px'} bottomSize={'5px'} leftSize={'0px'} widthSize={'300px'}>
                            <TextButton>{opcao.resposta}</TextButton>
                        </Button>
                    ))}
                </Content>
            </ScrollView>
        </View>
    );
}