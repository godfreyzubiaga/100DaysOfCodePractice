import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router';
import Container from './Container';
import UserContainer from './Containers/UserContainer';

const StyledDiv = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export default () => (
  <StyledDiv>
    <Subscribe to={[UserContainer]}>
      {(userContainer) => {
        const { state } = userContainer;
        if (!state.hasActiveUser) {
          return <Redirect to="/signin" />;
        }
        return (
          <Container>
            <h1>Hello, {state.user.name}!</h1>
            <button type="button" onClick={() => userContainer.logout()}>
              Logout
            </button>
          </Container>
        );
      }}
    </Subscribe>
  </StyledDiv>
);
