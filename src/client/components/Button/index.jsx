import React from 'react';
import styled from 'styled-components';

const Submit = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  letter-spacing: 2px;
  background: #333;
  color: white;
  cursor: pointer;
  margin: 10px;
  transition-duration: 0.2s;

  &:hover {
    transition-duration: 0.2s;
    background: #fafafa;
    color: #333;
  }
`;

export default props => <Submit {...props} />;
