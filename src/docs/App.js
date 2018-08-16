import React, { Component } from 'react'
import { List } from '../components/index'

const Item = List.Item

export default class App extends Component {
  render() {
    console.log(this)
    return (
      <div>
        <List>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('button')
            }}
          >
            Button
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('switch')
            }}
          >
            Switch
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('list')
            }}
          >
            List
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('empty')
            }}
          >
            Empty
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('whitespace')
            }}
          >
            WhiteSpace
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('checkbox')
            }}
          >
            Checkbox
          </Item>
        </List>
      </div>
    )
  }
}
