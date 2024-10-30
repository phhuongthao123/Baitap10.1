// src/components/TodoList.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem todo={item} onRemove={handleRemove} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 0, // Đảm bảo khớp với các thành phần khác trong màn hình
  },
});

export default TodoList;
