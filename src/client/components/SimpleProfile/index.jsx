import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router';
import Container from './Container';
import UserContainer from './Containers/UserContainer';
import Button from '../Button';
import BackNav from '../BackNav';

const StyledDiv = styled.div`
  height: 100vh;
  background: slategrey;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export default () => (
  <StyledDiv>
    <BackNav />
    <Subscribe to={[UserContainer]}>
      {(userContainer) => {
        const { state } = userContainer;
        if (!state.hasActiveUser) {
          return <Redirect to="/signin" />;
        }
        return (
          <Container>
            <h1>Hello, {state.user.name}!</h1>
            <Button type="button" onClick={() => userContainer.logout()}>
              Logout
            </Button>
          </Container>
        );
      }}
    </Subscribe>
  </StyledDiv>
);
