import * as React from 'react';

/**
 * 面板组件主体
 */
export class UIPanelBody extends React.Component {
  render() {
    return (
      <div className="ui-panel-body">{
        this.props.children
      }</div>
    );
  }
}
