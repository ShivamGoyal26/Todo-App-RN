import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files
import Todo from '../screens/Todo';
import AddTodo from '../screens/AddTodo';
import routes from '../constants/routes';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.TODO}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.TODO} component={Todo} />
      <Stack.Screen name={routes.ADD_TODO} component={AddTodo} />
    </Stack.Navigator>
  );
};

export default HomeStack;
