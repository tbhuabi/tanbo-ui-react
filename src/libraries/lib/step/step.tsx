import * as React from 'react';
import { UIStepItem } from './step-item';

export interface StepProps {
  activeIndex?: number;
}

/**
 * 步骤条组件
 */
export class UIStep extends React.Component<StepProps, any> {
  static Item = UIStepItem;

  render() {
    // const num = this.props.activeIndex;
    // React.Children.toArray(this.props.children)
    //   .filter((child: any) => child.type === UIStepItem)
    //   .forEach((item: any, index) => {
    //     item.props.activeIndex = index;
    //     if (num > index) {
    //       item.props.status = 'complete';
    //     } else if (num < index) {
    //       item.props.status = 'waiting';
    //     } else {
    //       item.props.status = 'current';
    //     }
    //   });

    return (
      <div className="ui-step">{
        this.props.children
      }</div>
    );
  }
}
