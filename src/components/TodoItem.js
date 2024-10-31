import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  font-size: 18px;
  color: #555;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoItem = ({ task }) => <Item>{task}</Item>;

export default TodoItem;
