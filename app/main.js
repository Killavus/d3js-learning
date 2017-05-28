import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppContainer from './AppContainer'

function createRootStructure({ document }) {
  var container = document.createElement('div')

  container.id = 'app'
  document.body.prepend(container)
  return container
}

const app = createRootStructure(window)

render(
  <Router>
    <div>
      <Route path='/' component={AppContainer} />
      <Route exact path='/ex1' render={() => <p>Example #1</p>} />
      <Route exact path='/ex2' render={() => <p>Example #2</p>} />
    </div>
  </Router>
, app)