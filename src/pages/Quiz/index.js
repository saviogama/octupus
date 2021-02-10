import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { View, Text, Image, Button, TextButton, Header, Content } from './styles';

export default function Quiz() {
    const navigation = useNavigation();

    function navigateToScore() {
        navigation.navigate('Score');
    }

    return (
        <View>
            <ScrollView>
                <Header>
                    <Text topSize={'40px'} bottomSize={'5px'} leftSize={'0px'} rightSize={'0px'} fontSize={'12px'}>Questão: 2/15</Text>
                    <Text topSize={'40px'} bottomSize={'5px'} leftSize={'0px'} rightSize={'0px'} fontSize={'12px'}>Tempo: 10:00</Text>
                </Header>
                <Content>
                    <Image source={require('../../assets/questao1.png')} />
                </Content>
                <Text topSize={'1px'} bottomSize={'20px'} leftSize={'15px'} rightSize={'15px'} fontSize={'16px'}>Quem é Paz?</Text>
                <Content>
                    <Button topSize={'5px'} bottomSize={'5px'} leftSize={'0px'} widthSize={'300px'}>
                        <TextButton>Uma menina comum</TextButton>
                    </Button>
                    <Button topSize={'5px'} bottomSize={'5px'} leftSize={'0px'} widthSize={'300px'}>
                        <TextButton>Uma menina comum</TextButton>
                    </Button>
                    <Button topSize={'5px'} bottomSize={'5px'} leftSize={'0px'} widthSize={'300px'}>
                        <TextButton>Uma menina comum</TextButton>
                    </Button>
                    <Button topSize={'5px'} bottomSize={'5px'} leftSize={'0px'} widthSize={'300px'}>
                        <TextButton>Uma menina comum</TextButton>
                    </Button>
                    <Button topSize={'5px'} bottomSize={'15px'} leftSize={'0px'} widthSize={'300px'}>
                        <TextButton>Uma menina comum</TextButton>
                    </Button>
                </Content>
                <Button onPress={navigateToScore} topSize={'5px'} bottomSize={'30px'} leftSize={'15px'} widthSize={'150px'}>
                    <TextButton>Voltar</TextButton>
                </Button>
            </ScrollView>
        </View>
    );
}