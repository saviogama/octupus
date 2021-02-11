
import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Context from '../context';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Score from '../pages/Score';

const Stack = createStackNavigator();

const Routes = () => {
    const { loading } = useContext(Context);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        );
    } else {
        return (
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Score" component={Score} />
            </Stack.Navigator>
        );
    }
}

export default Routes;