import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import HomeStack from './src/routes/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.screen} edges={['top']}>
          {/* <HomeStack /> */}
          <AuthStack />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
