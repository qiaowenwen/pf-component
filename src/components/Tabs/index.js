import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs, DefaultTabBar } from 'rmc-tabs'
import './style.less'
import 'rmc-tabs/assets/index.css'
function noop() {}
class RTabs extends Component {
  static DefaultTabBar = Tabs.DefaultTabBar
  render() {
    const {
      onChange,
      onTabClick,
      animated,
      initialPage,
      tabData,
      children,
      fixHeight,
      tabBarPosition,
      renderTabBar,
      tabBarBackgroundColor,
      tabBarActiveTextColor,
      tabBarInactiveTextColor,
      tabBarTextStyle,
    } = this.props
    return (
      <Tabs
        tabs={tabData}
        initialPage={initialPage}
        animated={animated}
        onChange={onChange}
        onTabClick={onTabClick}
        renderTabBar={renderTabBar}
        tabBarPosition={tabBarPosition}
        tabBarBackgroundColor={tabBarBackgroundColor}
        tabBarActiveTextColor={tabBarActiveTextColor}
        tabBarInactiveTextColor={tabBarInactiveTextColor}
        tabBarTextStyle={tabBarTextStyle}
      >
        {children}
      </Tabs>
    )
  }
}

RTabs.propTypes = {
  //数据源
  tabData: PropTypes.array,
  //初始项
  initialPage: PropTypes.number,
  //是否有动画
  animated: PropTypes.bool,
  //tab变化时触发
  onChange: PropTypes.func,
  //tab被点击时回掉
  onTabClick: PropTypes.func,
  //选择条的位置
  tabBarPosition: PropTypes.string,
  //tabBar背景色
  tabBarBackgroundColor: PropTypes.string,
  //tabBar激活Tab文字颜色
  tabBarActiveTextColor: PropTypes.string,
  //tabBar非激活Tab文字颜色
  tabBarInactiveTextColor: PropTypes.string,
  //tabBar文字样式
  tabBarTextStyle: PropTypes.any
}
RTabs.defaultProps = {
  tabData: '',
  onChange: noop,
  onTabClick: noop,
  initialPage: 0,
  animated: true,
  tabBarPosition: 'top',
  tabBarBackgroundColor: '',
  tabBarActiveTextColor: '',
  tabBarInactiveTextColor: '',
  tabBarTextStyle: ''
}

export default RTabs
