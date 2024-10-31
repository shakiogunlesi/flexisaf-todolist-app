
import React, { useState } from 'react';
import TodoList from './components/TodoItem';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  width: 200px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <AppContainer>
      <Header>To-Do List</Header>
      <Input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <Button onClick={addTask}>Add Task</Button>
      <TodoList tasks={tasks} />
    </AppContainer>
  );
};

export default App;
