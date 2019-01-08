import React from 'react';
import styled from 'styled-components';
import { oneOfType, arrayOf, node } from 'prop-types';

const StyledDiv = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const Container = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Container;
