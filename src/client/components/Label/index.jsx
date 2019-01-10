import React from 'react';
import styled from 'styled-components';
import {
  node, oneOfType, arrayOf, string,
} from 'prop-types';

const StyledLabel = styled.label`
  margin: 10px 0 0 0;
`;

const Label = ({ children, htmlFor, label }) => (
  <StyledLabel htmlFor={htmlFor}>
    <p>{label}</p>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  htmlFor: string.isRequired,
  label: string.isRequired,
};

export default Label;
