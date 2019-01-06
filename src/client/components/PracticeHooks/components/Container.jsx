import React from 'react';
import styled from 'styled-components';
import { oneOfType, node, arrayOf } from 'prop-types';
import fadeIn from '../../../assets/animations/fadeIn';

const StyledDiv = styled.div`
  display: flex;
  height: 500px;
  width: 80%;
  margin: 30px auto;
  justify-content: space-between;
  align-items: flex-start;
  animation: ${fadeIn} 0.8s linear;
`;

const Container = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Container;
