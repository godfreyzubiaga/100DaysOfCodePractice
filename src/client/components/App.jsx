import React from 'react';
import styled from 'styled-components';
import Routes from '../Routes';

const StyledDiv = styled.div`
  height: 100vh;
  background: slategray;
`;

export default () => (
  <StyledDiv>
    <Routes />
  </StyledDiv>
);
