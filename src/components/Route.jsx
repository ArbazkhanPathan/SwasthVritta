import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch , Route } from 'react-router-dom'
import product from'./product'
import About from './about'
import Navigation from './navigation'

export default function Routepage() {
  return( 
  <div>
      <Router>
          <Switch>
              <Route path="/" exact component={product}/>
              <Route path="/" exact component={About}/>
              <Route path="/" exact component={Navigation}/>

          </Switch>
      </Router>

  </div>
  )
}
