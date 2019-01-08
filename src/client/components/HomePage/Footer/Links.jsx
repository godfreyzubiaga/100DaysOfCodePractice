import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

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

const Link = ({ href, name }) => (
  <RepoLinks href={href} target="_blank">
    {name}
  </RepoLinks>
);

Link.propTypes = {
  href: string.isRequired,
  name: string.isRequired,
};

export default Link;
