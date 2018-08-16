import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './src/docs/App'
import Button from './src/docs/demo/button'
import SwitchButton from './src/docs/demo/switch'
import List from './src/docs/demo/list'
import Empty from './src/docs/demo/empty'
import './src/docs/App.css'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/button" component={Button} />
      <Route path="/switch" component={SwitchButton} />
      <Route path="/list" component={List} />
      <Route path="/empty" component={Empty} />
    </Switch>
  </HashRouter>,
  document.getElementById('App')
)
