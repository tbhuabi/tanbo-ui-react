import * as React from 'react';
import { UITimelineItem } from './timeline-item';

/**
 * 时间轴组件
 */
export class UITimeline extends React.Component {
  static Item = UITimelineItem;

  render() {
    return (
      <div className="ui-timeline">{
        this.props.children
      }</div>
    );
  }
}
