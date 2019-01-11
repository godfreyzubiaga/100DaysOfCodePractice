import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Link from './Links';

const Footer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 20px;
  color: white;
`;

export default () => (
  <Footer>
    <h4>Links</h4>
    <Container>
      <Link href="https://github.com/godfreyzubiaga/100DaysOfCodePractice" name="Repository" />
      <Link href="https://github.com/godfreyzubiaga/100-days-of-code/blob/master/log.md" name="Daily Log" />
      <Link href="https://godfreyzubiaga.github.io" name="Portfolio" />
    </Container>
  </Footer>
);
