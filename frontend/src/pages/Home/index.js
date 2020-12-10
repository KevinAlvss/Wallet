import React from 'react';

import ContentBox from '../../components/ContentBox';
import Card from '../../components/Card';

import {Container, 
        Header, 
        Greetings, 
        UserName, 
        Content,
        ConteudoBox,
        CardsBox
      } from './styles';


function Home() {
  return (
    <Container>

      <Header>
        <Greetings>
          <h1>Wallet</h1>
          <p>Olá <UserName>Kevin</UserName></p>
        </Greetings>
      </Header>


      <Content>

        <ContentBox>
          <ConteudoBox>          
            <h2>Suas rendas</h2>
            <CardsBox>
              <Card 
                titulo="Salário"
                valor="4.000 R$"
              />
            </CardsBox>
          </ConteudoBox>
        </ContentBox>

        <ContentBox>
        <ConteudoBox>          
            <h2>Seus gastos</h2>
            <CardsBox>
            </CardsBox>
          </ConteudoBox>
        </ContentBox>

        <ContentBox>
        <ConteudoBox>          
            <h2>Últimos gastos</h2>
            <CardsBox>
            </CardsBox>
          </ConteudoBox>
        </ContentBox>

      </Content>


    </Container>
  );
}

export default Home;
