import React from 'react';

import './App.css';
import Home from './paginas/Home/Home';
import Todo from './paginas/todo/Todo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route path='/todo/:userId' component={Todo}/>
          
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
