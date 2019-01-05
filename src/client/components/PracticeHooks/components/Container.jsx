import React from 'react';
import styled from 'styled-components';
import { oneOfType, node, arrayOf } from 'prop-types';

const StyledDiv = styled.div`
  display: flex;
  height: 500px;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
`;

const Container = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};

export default Container;
