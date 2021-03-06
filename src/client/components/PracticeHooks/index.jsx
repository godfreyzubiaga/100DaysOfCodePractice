import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Row from './components/Row';
import Input from '../Input';
import useFormInput from '../../customHooks/useFormInput';
import Container from './components/Container';
import Text from './components/Text';
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

const PracticeHooks = () => {
  const name = useFormInput('Mary Poppins');
  const email = useFormInput('mary.poppins@gmail.com');
  const age = useFormInput(5);

  return (
    <StyledDiv>
      <BackNav />
      <h1>React Hooks</h1>
      <Container>
        <Card>
          <h4>Form Input</h4>
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
        <Card alignLeft>
          <h4 style={{ textAlign: 'center' }}>Form Values</h4>
          <Row label="Name">
            <Text value={name.value} />
          </Row>
          <Row label="Email">
            <Text value={email.value} />
          </Row>
          <Row label="Age">
            <Text value={age.value.toString()} />
          </Row>
        </Card>
      </Container>
    </StyledDiv>
  );
};

export default PracticeHooks;
