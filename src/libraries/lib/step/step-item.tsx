import * as React from 'react';

export interface StepItemProps {
  index?: number;
  status?: 'waiting' | 'complete' | 'current';
}

/**
 * 步骤条项目
 */
export class UIStepItem extends React.Component<StepItemProps, any> {

  render() {
    const classNames = ['ui-step-item'];
    if (this.props.status) {
      classNames.push('ui-' + this.props.status);
    }
    return (
      <div className={classNames.join(' ')}>
        <div className="ui-step-item-header">
          <div className="ui-step-item-line">
          </div>
          <div className="ui-step-item-icon">
            {this.props.index + 1}
          </div>
        </div>
        <div className="ui-step-item-content">{
          this.props.children
        }
        </div>
      </div>
    );
  }
}
