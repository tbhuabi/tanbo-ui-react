import * as React from 'react';

/**
 * 面板组件头部
 */
export class UIPanelHeader extends React.Component {
  render() {
    return (
      <div className="ui-panel-header">{
        this.props.children
      }</div>
    );
  }
}
