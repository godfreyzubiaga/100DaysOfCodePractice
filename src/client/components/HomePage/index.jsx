import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fadeIn from '../../assets/animations/fadeIn';

const StyledDiv = styled.div`
  text-align: center;
  background: slategray;
  margin: 0;
  height: 100%;
  animation: ${fadeIn} 0.3s linear;
`;

const SelectLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition-duration: 0.3s;
  padding: 8px 10px;
  border-radius: 10px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }

  &:hover {
    transition-duration: 0.3s;
    background: #333;
  }
`;

const LinkContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  color: white;
  padding-top: 20px;
  margin: 0;
`;

const Footer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 20px;
  color: white;
`;

const RepoLinks = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.3s;
  padding: 5px 10px;
  border-radius: 5px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }

  &:hover {
    transition-duration: 0.3s;
    background: #333;
  }
`;

const Container = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export default () => (
  <StyledDiv>
    <Title>#100DaysOfCode Practice</Title>
    <LinkContainer>
      <SelectLink to="/hooks">React Hooks</SelectLink>
    </LinkContainer>
    <LinkContainer>
      <SelectLink to="/context">React Context</SelectLink>
    </LinkContainer>
    <Footer>
      <h4>Links</h4>
      <Container>
        <RepoLinks href="https://github.com/godfreyzubiaga/100DaysOfCodePractice" target="_blank">
          Repository
        </RepoLinks>
        <RepoLinks href="https://godfreyzubiaga.github.io" target="_blank">
          Portfolio
        </RepoLinks>
      </Container>
    </Footer>
  </StyledDiv>
);
