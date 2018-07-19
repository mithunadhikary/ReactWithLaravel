
require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProduct';
import UpdateProduct from './components/UpdateProduct';
import ShowProduct from './components/ShowProduct';


render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateProduct} />
        <Route path="/display-item" component={DisplayProduct} />

 
        <Route path="/edit/:id" component={UpdateProduct} />
        <Route path="/show/:id" component={ShowProduct} />
      </Route>
    </Router>,
        document.getElementById('crud-app'));