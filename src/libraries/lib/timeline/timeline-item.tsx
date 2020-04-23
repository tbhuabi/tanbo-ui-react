import * as React from 'react';

export interface TimelineItemProps {
  checked?: boolean;
  theme?: 'dark' | 'gray' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
}

/**
 * 时间轴项目
 */
export class UITimelineItem extends React.Component<TimelineItemProps, any> {
  render() {
    const classes = ['ui-timeline-item'];
    if (this.props.checked) {
      classes.push('ui-checked');
    }
    if (this.props.theme) {
      classes.push(`ui-${this.props.theme}`);
    }
    return (
      <div className={classes.join(' ')}>
        <div className="ui-timeline-line"/>
        <div className="ui-timeline-icon"/>
        {
          this.props.children
        }
      </div>
    );
  }
}
