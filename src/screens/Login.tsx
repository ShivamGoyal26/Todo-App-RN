import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Login;
