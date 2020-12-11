import React from 'react';

import { Container } from './styles'

function Card(props) {

  return (
      <Container cor={props.cor}>
          <h4>{props.titulo}</h4>
          <span>{props.valor + " R$"}</span>
      </Container>
  );
}

export default Card;