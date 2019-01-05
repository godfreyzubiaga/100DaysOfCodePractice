import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledSpan = styled.span`
  font-weight: bold;
`;

const Text = ({ value }) => <StyledSpan>{value}</StyledSpan>;

Text.propTypes = {
  value: string
};

Text.defaultProps = {
  value: ''
};

export default Text;
