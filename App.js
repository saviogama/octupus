import React from 'react';
import { Provider } from './src/context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}