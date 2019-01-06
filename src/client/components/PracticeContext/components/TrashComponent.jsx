import React from 'react';
import styled from 'styled-components';
import fadeIn from '../../../assets/animations/fadeIn';

const StyledDiv = styled.div`
  text-align: center;
  background: white;
  color: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  height: 300px;
  width: 200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  animation: ${fadeIn} 0.8s linear;
`;

export default () => <StyledDiv>Trash Components</StyledDiv>;
