import React, { useState } from 'react';
import styled from 'styled-components';
import { themes, ThemeContext } from './context/theme-context';
import MainComponent from './components/MainComponent';
import OtherComponent from './components/OtherComponent';
import TrashComponent from './components/TrashComponent';
import ToggleButton from './components/ToggleButton';
import BackNav from '../BackNav';

const StyledDiv = styled.div`
  background: slategrey;
  text-align: center;
  color: white;
`;

const Container = styled.div`
  display: flex;
  margin: 50px;
`;

const PracticeContext = () => {
  const [theme, setTheme] = useState(themes.light);
  const { dark, light } = themes;

  const toggleTheme = () => {
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };

  return (
    <StyledDiv>
      <BackNav />
      <h1>React Context API</h1>
      <ThemeContext.Provider value={theme}>
        <Container>
          <MainComponent />
          <TrashComponent />
          <OtherComponent />
        </Container>
        <ToggleButton {...theme} onClick={toggleTheme} />
      </ThemeContext.Provider>
    </StyledDiv>
  );
};

export default PracticeContext;
