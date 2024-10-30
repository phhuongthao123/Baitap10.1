import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import TodoApp from './src/screens/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
