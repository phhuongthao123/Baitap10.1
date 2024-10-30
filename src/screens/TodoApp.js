// src/screens/TodoApp.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodoApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TodoInput />
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40, // Thêm khoảng cách phía trên cho tiêu đề
    textAlign: 'center',
  },
});

export default TodoApp;
