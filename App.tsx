import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import theme from './src/themes';
import AppNavigation from './src/routes';

const App: React.FC = () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
      <AppNavigation />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;
