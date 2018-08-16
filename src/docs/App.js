import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from '../components/index'

const Item = List.Item

export default class App extends Component {
  render() {
    return (
      <div>
        <List>
          <Item extra="详情" arrow>
            <Link to="button">
              <span>Button</span>
            </Link>
          </Item>
          <Item extra="详情" arrow>
            <Link to="switch">
              <span>Switch</span>
            </Link>
          </Item>
          <Item extra="详情" arrow>
            <Link to="list">
              <span>List</span>
            </Link>
          </Item>
        </List>
      </div>
    )
  }
}
