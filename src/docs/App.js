import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="button">
              <span>Button</span>
            </Link>
          </li>
          <li>
            <Link to="switch">
              <span>Switch</span>
            </Link>
          </li>
          <li>
            <Link to="list">
              <span>List</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
