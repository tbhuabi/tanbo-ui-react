import * as React from 'react';

import { UIBreadcrumbItem } from './breadcrumb-item';

/**
 * 面包屑
 */
export class UIBreadcrumb extends React.Component {
  static Item = UIBreadcrumbItem;

  render() {
    return (
      <div className="ui-breadcrumb">{
        this.props.children
      }</div>
    );
  }
}
