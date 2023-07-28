import React, {useState, useReducer, useEffect} from 'react';
import {
  Paper,
  Checkbox,
  IconButton,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';
// import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Delete,
  CalendarToday,
  NotificationsActive,
  Refresh,
} from '@material-ui/icons';
import {render} from '@testing-library/react';
import '../css/GGCalendar.css';
import FormAddTodo from './FormAddTodo';
import TodoItem from './TodoItem';
import todosReducer from '../reducer/todoReducer';

const GGCalendar = () => {
  const [type, setType] = useState('ggcalendar');

  // Check localStorage for initial todos
  const savedTodos = localStorage.getItem('todos');
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const [currentTask, setCurrentTask] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentDeadline, setCurrentDeadline] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [closeForm, setCloseForm] = useState(true);
  const [textBar, setTextBar] = useState('');
  const [notifiedForm, setNotifiedForm] = useState(false);

  const handleRefreshData = () => {};

  const handleGetData = () => {};

  return (
    <div className='App'>
      <Paper
        elevation={10}
        className='paper-container'
        style={{backgroundColor: 'lightgrey'}}
      >
        <div className='div-button'>
          <button
            className='data-button'
            type='button'
            onClick={handleRefreshData}
            style={{display: 'flex'}}
          >
            Refresh <Refresh />
          </button>
          <button className='data-button' type='button' onClick={handleGetData}>
            Get Data
          </button>
        </div>
        <FormAddTodo todos={todos} type={type} dispatch={dispatch} />
        <div
          className='scroll-container'
          style={{
            maxHeight: '240px',
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

export default GGCalendar;
