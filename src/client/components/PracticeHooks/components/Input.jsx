import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  background: inherit;
  padding: 5px;
  font-size: 0.9em;
  width: 100%;
  border-bottom: 1px solid gray;
  color: white;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
