import * as React from 'react';
import { UIStepItem } from './step-item';
import { StepContextKlass, StepContext } from './step-context';

export interface StepProps {
  activeIndex?: number;
}

/**
 * 步骤条组件
 */
export class UIStep extends React.Component<StepProps, any> {
  static Item = UIStepItem;

  render() {
    const provider = new StepContextKlass();
    provider.activeIndex = this.props.activeIndex;
    return (
      <div className="ui-step">
        <StepContext.Provider value={provider}>{
          this.props.children
        }</StepContext.Provider>
      </div>
    );
  }
}
