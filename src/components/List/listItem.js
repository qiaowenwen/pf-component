import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/index'
import './listItem.less'

class ListItem extends Component {
  render() {
    const { extra, children, arrow, long } = this.props
    const extraClassName = classNames('pf-list-inline', {
      [`pf-list-inline-long`]: long
    })

    return (
      <div className="pf-list-item">
        <div className={extraClassName}>
          <div className="pf-list-content">{children}</div>
          <div className="pf-list-extra">{extra}</div>
          {arrow ? (
            <div className="pf-list-arrow">
              <Icon name="enter" />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  extra: PropTypes.string,
  long: PropTypes.bool,
  arrow: PropTypes.bool
}

ListItem.defaultProps = {
  extra: '',
  long: false,
  arrow: false
}

export default ListItem
