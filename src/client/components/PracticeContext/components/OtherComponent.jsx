import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/theme-context';
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
  animation: ${fadeIn} 0.5s linear;
  transition-duration: 0.5s;
`;

export default () => (
  <ThemeContext.Consumer>
    {theme => <StyledDiv {...theme}>Other Components</StyledDiv>}
  </ThemeContext.Consumer>
);
