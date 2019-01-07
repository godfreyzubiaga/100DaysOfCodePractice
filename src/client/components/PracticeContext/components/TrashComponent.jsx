import React from 'react';
import styled from 'styled-components';
import { themes } from '../context/theme-context';
import fadeIn from '../../../assets/animations/fadeIn';

const StyledDiv = styled.div`
  text-align: center;
  background: ${props => props.background};
  color: ${props => props.foreground};
  border: ${props => props.border};
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

export default () => <StyledDiv {...themes.dark}>Trash Components</StyledDiv>;
