
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Score from '../pages/Score';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Score" component={Score} />
        </Stack.Navigator>
    );
}