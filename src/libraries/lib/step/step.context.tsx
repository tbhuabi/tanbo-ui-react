import * as React from 'react';
import { UIStepItem } from './step-item';

/**
 * 动态设置步骤条状态及索引的上下文类
 */
export class StepContextKlass {
  activeIndex = 0;
  private items: UIStepItem[] = [];

  addItem(item: UIStepItem) {
    this.items.push(item);
  }

  removeItem(item: UIStepItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getStatus(child: UIStepItem) {
    const index = this.getIndex(child);
    let status = '';
    if (this.activeIndex > index) {
      status = 'complete';
    } else if (this.activeIndex < index) {
      status = 'waiting';
    } else {
      status = 'current';
    }
    return status;
  }

  getIndex(child: UIStepItem) {
    return this.items.indexOf(child);
  }
}

export const StepContext = React.createContext(new StepContextKlass());
