import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage=()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
