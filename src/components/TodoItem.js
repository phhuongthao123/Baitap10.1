// src/components/TodoItem.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = ({ todo, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.text}</Text>
      <TouchableOpacity onPress={() => onRemove(todo.id)}>
        <Text style={styles.remove}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    elevation: 2,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  remove: {
    color: '#e74c3c',
    fontSize: 20,
  },
});

export default TodoItem;
