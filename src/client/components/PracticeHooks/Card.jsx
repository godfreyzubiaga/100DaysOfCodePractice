import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const StyledCard = styled.div`
  width: 300px;
  background: #f3dfa2;
  margin: auto;
  color: #333;
  padding: 10px;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.propTypes = {
  children: node.isRequired
};

export default Card;
