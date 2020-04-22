import * as React from 'react';

import { BreadcrumbItem } from './breadcrumb-item';

/**
 * 面包屑
 */
export class Breadcrumb extends React.Component<any, any> {
  static Item = BreadcrumbItem;

  render() {
    return (
      <div className="ui-breadcrumb">{
        this.props.children
      }</div>
    );
  }
}
