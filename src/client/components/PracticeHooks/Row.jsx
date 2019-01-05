import React from 'react';
import styled from 'styled-components';
import { node, string } from 'prop-types';

const StyledRow = styled.div`
  width: 80%;
  margin: 10px auto;
`;

const Label = styled.p`
  font-size: 1.1em;
  margin: none;
  margin: 0;
`;

const Row = ({ children, label }) => (
  <StyledRow>
    <Label>{label}</Label>
    {children}
  </StyledRow>
);

Row.propTypes = {
  children: node.isRequired,
  label: string.isRequired
};

export default Row;
