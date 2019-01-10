import React, { useState } from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import useFormInput from '../../customHooks/useFormInput';
import UserContainer from './Containers/UserContainer';
import Input from '../Input';
import BackNav from '../BackNav';
import Button from '../Button';
import Label from '../Label';

const StyledDiv = styled.div`
  height: 100vh;
  background: slategrey;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      <BackNav />
      <Subscribe to={[UserContainer]}>
        {userContainer => (
          <Container>
            <h1>Sign Up</h1>
            <StyledForm
              autoComplete="off"
              onSubmit={event => submitForm(event, userContainer.login)}
            >
              <Label htmlFor="name" label="Name">
                <Input autoComplete="false" id="name" type="text" required {...name} />
              </Label>
              <Label htmlFor="name" label="Email">
                <Input autoComplete="false" id="email" type="email" required {...email} />
              </Label>
              <Label htmlFor="address" label="Address">
                <Input autoComplete="false" id="address" type="text" required {...address} />
              </Label>
              <p>
                <Button type="submit">Submit</Button>
              </p>
            </StyledForm>
          </Container>
        )}
      </Subscribe>
    </StyledDiv>
  );
};

export default Signin;
