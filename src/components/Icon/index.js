import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

export default class IconFont extends Component {
  render() {
    const { className, name, color } = this.props
    return (
      <i className={`iconfont icon-${name} ${className}`} style={{ color }} />
    )
  }
}

IconFont.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string
}

IconFont.defaultProps = {
  name: '',
  className: '',
  color: '#ddd'
}
