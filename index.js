import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './src/docs/App'
import Button from './src/docs/demo/button'
import SwitchButton from './src/docs/demo/switch'
import List from './src/docs/demo/list'
import ListView from './src/docs/demo/listview'
import Empty from './src/docs/demo/empty'
import WhiteSpace from './src/docs/demo/whitespace'
import Checkbox from './src/docs/demo/checkbox'
import './src/docs/App.css'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/button" component={Button} />
      <Route path="/switch" component={SwitchButton} />
      <Route path="/list" component={List} />
      <Route path="/listview" component={ListView} />
      <Route path="/empty" component={Empty} />
      <Route path="/whitespace" component={WhiteSpace} />
      <Route path="/checkbox" component={Checkbox} />
    </Switch>
  </HashRouter>,
  document.getElementById('App')
)
