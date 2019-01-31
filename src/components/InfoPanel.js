import React, { Component } from 'react'

export class InfoPanel extends Component {
  render() {
    return (
      <div className="flow-right">
        <span>
            Item count: {this.props.info.itemCount}
        </span>
        <span>
            Unchecked count: {this.props.info.uncheckedCount}
        </span>
      </div>
    )
  }
}

export default InfoPanel
