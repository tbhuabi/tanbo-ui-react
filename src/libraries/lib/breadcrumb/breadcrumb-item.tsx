import * as React from 'react';

/**
 * 面包屑子项
 */
export class BreadcrumbItem extends React.Component<any, any> {
  render() {
    return (
      <div className="ui-breadcrumb-item">{
        this.props.children
      }<span className="ui-breadcrumb-split-icon">/</span></div>
    );
  }
}
