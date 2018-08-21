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
              this.props.history.push('input')
            }}
          >
            InputItem
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('form')
            }}
          >
            Forms
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
              this.props.history.push('listview')
            }}
          >
            ListView
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('flex')
            }}
          >
            Flex
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
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('imagepicker')
            }}
          >
            ImagePicker
          </Item>
          <Item
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('message')
            }}
          >
            Message
          </Item>
        </List>
      </div>
    )
  }
}
