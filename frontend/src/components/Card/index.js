import React from 'react';

import { Container } from './styles';

function Card(props) {

  console.log(props.backgroundcolor)

  return (
      <Container>
          <h4>{props.titulo}</h4>
          <span>{props.valor}</span>
      </Container>
  );
}

export default Card;