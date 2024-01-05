import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddTodo = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Add Todo Screen</Text>

      <View style={styles.textInputContainer}>
        <TextInput
          onChangeText={e => {
            setText(e);
          }}
          value={text}
          placeholder="Type your value"
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log(text);
        }}
        style={styles.actionContainer}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Back</Text>
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
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  textInputContainer: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    padding: 10,
  },
  actionContainer: {
    marginVertical: 20,
    alignSelf: 'center',
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default AddTodo;
