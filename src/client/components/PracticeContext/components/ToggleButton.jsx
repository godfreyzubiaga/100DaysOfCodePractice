import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #333333;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default props => <Button {...props}>Toggle Theme</Button>;
