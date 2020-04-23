import * as React from 'react';
import { StepContext } from './step-context';

/**
 * 步骤条项目
 */
export class UIStepItem extends React.Component<{}, any> {
  static contextType = StepContext;
  context!: React.ContextType<typeof StepContext>;

  componentWillMount(): void {
    this.context.addItem(this);
  }

  render() {
    const classNames = ['ui-step-item'];
    const status = this.context.getStatus(this);
    if (status) {
      classNames.push('ui-' + status);
    }
    return (
      <div className={classNames.join(' ')}>
        <div className="ui-step-item-header">
          <div className="ui-step-item-line">
          </div>
          <div className="ui-step-item-icon">
            {this.context.getIndex(this)}
          </div>
        </div>
        <div className="ui-step-item-content">{
          this.props.children
        }
        </div>
      </div>
    );
  }

  componentWillUnmount(): void {
    this.context.removeItem(this);
  }
}
