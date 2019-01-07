import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  position: relative;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1em;
  cursor: pointer;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;

const BackNavContainer = styled.div`
  text-align: left;
  width: 100vw;
`;

export default () => (
  <BackNavContainer>
    <StyledLink to="/">&larr; Back To Home</StyledLink>
  </BackNavContainer>
);
