import React, { Component } from 'react'
import { Checkbox, List } from '../../components/index'

const Item = List.Item

export default class CheckboxDemo extends Component {
  render() {
    return (
      <List renderHeader={() => 'Checkbox Component'}>
        <Item extra={<Checkbox />}>On</Item>
      </List>
    )
  }
}
