import React from 'react';
import styled from 'styled-components';
import { Provider } from 'unstated';
import Routes from '../Routes';

const StyledDiv = styled.div`
  height: 100vh;
  background: slategray;
`;

export default () => (
  <StyledDiv>
    <Provider>
      <Routes />
    </Provider>
  </StyledDiv>
);
