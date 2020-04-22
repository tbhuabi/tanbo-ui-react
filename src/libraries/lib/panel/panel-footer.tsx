import * as React from 'react';

/**
 * 面板组件底部
 */
export class UIPanelFooter extends React.Component {
  render() {
    return (
      <div className="ui-panel-footer">{
        this.props.children
      }</div>
    );
  }
}
