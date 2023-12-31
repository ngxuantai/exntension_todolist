import React, {useState, useReducer, useEffect} from 'react';
import {
  Paper,
  Checkbox,
  IconButton,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';
import {Delete, CalendarToday, NotificationsActive} from '@material-ui/icons';
import {render} from '@testing-library/react';
import '../css/Home.css';
import FormAddTodo from './FormAddTodo';
import TodoItem from './TodoItem';
import todosReducer from '../reducer/todoReducer';

const Home = () => {
  // Check localStorage for initial todos
  const savedTodos = localStorage.getItem('todos');
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const normalTodos = initialTodos.filter((todo) => todo.type === 'normal');
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const [currentTask, setCurrentTask] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentDeadline, setCurrentDeadline] = useState('');
  const [type, setType] = useState('normal');
  const [selectedId, setSelectedId] = useState('');
  const [closeForm, setCloseForm] = useState(true);
  const [textBar, setTextBar] = useState('');
  const [notifiedForm, setNotifiedForm] = useState(false);

  return (
    <div className='App'>
      <Paper
        elevation={10}
        className='paper-container'
        style={{backgroundColor: 'lightgrey'}}
      >
        <FormAddTodo todos={todos} type={type} dispatch={dispatch} />
        <div
          className='scroll-container'
          style={{
            maxHeight: '290px',
          }}
        >
          {todos.map((todo) => {
            if (todo.type === type) {
              return <TodoItem todo={todo} key={todo.id} dispatch={dispatch} />;
            }
            return null;
          })}
        </div>
      </Paper>
    </div>
  );
};

export default Home;
