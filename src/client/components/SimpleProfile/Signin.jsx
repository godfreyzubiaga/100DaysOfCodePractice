import React, { useState } from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import useFormInput from '../../customHooks/useFormInput';
import UserContainer from './Containers/UserContainer';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  color: white;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Submit = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  letter-spacing: 2px;
  background: #333;
  color: white;
  cursor: pointer;
  margin: 10px;
`;

const Signin = () => {
  const name = useFormInput('');
  const email = useFormInput('');
  const address = useFormInput('');
  const [success, setSuccess] = useState(false);

  const noNullFields = fields => fields.every(field => field.length > 0);

  const submitForm = async (event, login) => {
    event.preventDefault();
    if (noNullFields([name.value, email.value, address.value])) {
      await login({ name: name.value, email: email.value, address: address.value });
      setSuccess(true);
    }
  };

  if (success) {
    return <Redirect to="/profile" />;
  }
  return (
    <StyledDiv>
      <Subscribe to={[UserContainer]}>
        {userContainer => (
          <Container>
            <h1>Sign Up</h1>
            <StyledForm
              autocomplete="off"
              onSubmit={event => submitForm(event, userContainer.login)}
            >
              <label htmlFor="name">
                <p>Name</p>
                <input autoComplete="false" id="name" type="text" required {...name} />
              </label>
              <label htmlFor="name">
                <p>Email</p>
                <input autoComplete="false" id="email" type="email" required {...email} />
              </label>
              <label htmlFor="address">
                <p>Address</p>
                <input autoComplete="false" id="address" type="text" required {...address} />
              </label>
              <div>
                <Submit type="submit">Submit</Submit>
              </div>
            </StyledForm>
          </Container>
        )}
      </Subscribe>
    </StyledDiv>
  );
};

export default Signin;
