import React from 'react';
import styled from 'styled-components';
import fadeIn from '../../assets/animations/fadeIn';
import Footer from './Footer';
import Navigation from './Navigation';

const StyledDiv = styled.div`
  text-align: center;
  background: slategray;
  margin: 0;
  height: 100%;
  animation: ${fadeIn} 0.3s linear;
`;

const Title = styled.h2`
  color: white;
  padding-top: 20px;
  margin: 0;
`;

export default () => (
  <StyledDiv>
    <Title>#100DaysOfCode Practice</Title>
    <Navigation link="/hooks" name="React Hooks" />
    <Navigation link="/context" name="React Context" />
    <Footer />
  </StyledDiv>
);
