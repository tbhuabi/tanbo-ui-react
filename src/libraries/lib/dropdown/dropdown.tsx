import * as React from 'react';

export interface DropdownProps {
  autoDisplay?: boolean;
  open?: boolean;
}

export class UIDropdown extends React.Component<DropdownProps, any> {
  render() {
    return (
      <div className="ui-dropdown">{
        this.props.children
      }</div>
    );
  }
}
