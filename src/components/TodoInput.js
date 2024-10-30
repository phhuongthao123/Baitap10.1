// src/components/TodoInput.js
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
      };
      dispatch(addTodo(newTodo));
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Thêm todo..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Thêm" onPress={handleAddTodo} color="#3498db" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%', // Đảm bảo chiếm toàn bộ chiều rộng của màn hình
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
});

export default TodoInput;
