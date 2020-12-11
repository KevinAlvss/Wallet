import React from 'react';

import {PieChart, Pie, Tooltip} from 'recharts';

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

  const gastos = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

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
                valor="4.000"
                cor='#16BFC4'
              />

              <Card 
                titulo="Aula de guitarra"
                valor="200"
                cor="#0ff"
              />
            </CardsBox>
          </ConteudoBox>
        </ContentBox>

        <ContentBox>
        <ConteudoBox>          
            <h2>Seus gastos</h2>
            <p>Esse mês: <strong>1.667R$</strong></p>
            <CardsBox>
            <PieChart width={400} height={400}>
              <Pie dataKey="value" isAnimationActive={false} data={gastos} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
            </CardsBox>
          </ConteudoBox>
        </ContentBox>

        <ContentBox>
        <ConteudoBox>          
            <h2>Últimos gastos</h2>
            <CardsBox>
              <Card 
                titulo="Pedal novo"
                valor="750"
                gasto= {true}
              />

              <Card 
                titulo="Conta de luz"
                valor="200"
                gasto={true}
              />
            </CardsBox>
          </ConteudoBox>
        </ContentBox>

      </Content>


    </Container>
  );
}

export default Home;
