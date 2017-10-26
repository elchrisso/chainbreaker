import React, { Component } from 'react'
import { AppBar } from 'material-ui'

class ChainerHeader extends Component {
  render () {
    return (
      <AppBar
        title="chainer"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}

export default ChainerHeader