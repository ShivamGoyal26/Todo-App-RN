import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import routes from '../constants/routes';

const Todo = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Todo Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routes.ADD_TODO);
        }}>
        <Text>Go To Add Todo</Text>
      </TouchableOpacity>
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

export default Todo;
