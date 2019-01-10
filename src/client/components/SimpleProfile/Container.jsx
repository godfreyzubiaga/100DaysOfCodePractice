import React from 'react';
import styled from 'styled-components';
import { oneOfType, node, arrayOf } from 'prop-types';

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 80%;
  margin: auto;
`;

const Container = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Container;
