import React from 'react';
import { Container, Cell } from './styles';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

function Layout() {
  return (
      <Container>
          <Cell>
              <BrowserRouter>
                 <Switch>
                     <Route path="/" component={Home} />
                 </Switch>
              </BrowserRouter>
          </Cell>
      </Container>
  );
}

export default Layout;