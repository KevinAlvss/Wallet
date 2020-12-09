import React from 'react';

import { Container } from './styles';

function ContentBox(props) {


  return (
      <Container>
       {props.children}
      </Container>
  );
}

export default ContentBox;