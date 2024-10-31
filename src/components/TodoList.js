import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
`;

const TodoList = ({ tasks }) => (
  <ListContainer>
    {tasks.map((task, index) => (
      <TodoItem key={index} task={task} />
    ))}
  </ListContainer>
);

export default TodoList;
