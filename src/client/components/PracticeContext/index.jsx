import React, { useState } from 'react';
import styled from 'styled-components';
import { themes, ThemeContext } from './context/theme-context';
import MainComponent from './components/MainComponent';
import OtherComponent from './components/OtherComponent';
import TrashComponent from './components/TrashComponent';
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

const ButtonContainer = styled.div`
  text-align: center;
`;

const ToggleButton = styled.button`
  background: #333333;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const BackNavContainer = styled.div`
  text-align: left;
  width: 100vw;
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
      <BackNavContainer>
        <BackNav />
      </BackNavContainer>
      <h1>React Context API</h1>
      <ThemeContext.Provider value={theme}>
        <Container>
          <MainComponent />
          <TrashComponent />
          <OtherComponent />
        </Container>
        <ButtonContainer>
          <ToggleButton {...theme} onClick={toggleTheme} {...theme}>
            Toggle Theme
          </ToggleButton>
        </ButtonContainer>
      </ThemeContext.Provider>
    </StyledDiv>
  );
};

export default PracticeContext;
