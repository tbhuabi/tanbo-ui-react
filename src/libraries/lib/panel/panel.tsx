import * as React from 'react';
import { UIPanelHeader } from './panel-header';
import { UIPanelBody } from './panel-body';
import { UIPanelFooter } from './panel-footer';

export interface PanelProps {
  fill?: boolean;
  theme?: 'dark' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
}

/**
 * 面板组件
 */
export class UIPanel extends React.Component<PanelProps, any> {
  static Header = UIPanelHeader;
  static Body = UIPanelBody;
  static Footer = UIPanelFooter;

  render() {
    const classNames = ['ui-panel'];
    if (this.props.fill) {
      classNames.push('ui-fill');
    }
    if (this.props.theme) {
      classNames.push(`ui-${this.props.theme}`);
    }
    return (
      <div className={classNames.join(' ')}>{
        this.props.children
      }</div>
    );
  }
}
