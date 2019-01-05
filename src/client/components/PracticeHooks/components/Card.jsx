import React from 'react';
import styled, { css } from 'styled-components';
import {
  oneOfType, node, arrayOf, bool
} from 'prop-types';

const StyledCard = styled.div`
  min-width: 300px;
  background: #f3dfa2;
  margin: 0 auto;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  ${({ alignCenter }) => alignCenter
    && css`
      text-align: center;
    `};

  ${({ alignLeft }) => alignLeft
    && css`
      text-align: left;
    `};
`;

const Card = ({ children, alignLeft, alignCenter }) => (
  <StyledCard alignCenter={alignCenter} alignLeft={alignLeft}>
    {children}
  </StyledCard>
);

Card.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  alignCenter: bool,
  alignLeft: bool
};

Card.defaultProps = {
  alignCenter: true,
  alignLeft: false
};

export default Card;
