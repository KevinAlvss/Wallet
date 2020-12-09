import React from 'react';

import ContentBox from '../../components/ContentBox';

import {Container, 
        Header, 
        Greetings, 
        UserName, 
        Content
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
          vvvvvv
        </ContentBox>

        <ContentBox>
          aaaa
        </ContentBox>

        <ContentBox>
          fff
        </ContentBox>

      </Content>


    </Container>
  );
}

export default Home;
