import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Row from './Row';
import Input from './Input';

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

const practiceHooks = () => {
  const name = useFormInput('Mary Poppins');
  const email = useFormInput('mary.poppins@gmail.com');
  const age = useFormInput(5);

  return (
    <StyledDiv>
      <h1>Hooks React Practice</h1>
      <Card>
        <Row label="Name">
          <Input type="text" {...name} />
        </Row>
        <Row label="Email">
          <Input type="email" {...email} />
        </Row>
        <Row label="Age">
          <Input type="number" {...age} />
        </Row>
      </Card>
    </StyledDiv>
  );
};

export default practiceHooks;
