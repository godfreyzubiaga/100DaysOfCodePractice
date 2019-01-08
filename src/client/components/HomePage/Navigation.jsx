import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const StyledDiv = styled.div`
  margin-top: 20px;
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

const Navigation = ({ link, name }) => (
  <StyledDiv>
    <SelectLink to={link}>{name}</SelectLink>
  </StyledDiv>
);

Navigation.propTypes = {
  link: string.isRequired,
  name: string.isRequired,
};

export default Navigation;
