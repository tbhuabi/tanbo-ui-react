import * as React from 'react';

export interface LoadingProps {
  color?: string;
  scale?: number;
}

/**
 * 加载动画
 */
export class UILoading extends React.Component<LoadingProps, any> {
  render() {
    return (
      <div className="ui-loading">
        <div className="ui-loading-1"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-2"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-3"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-4"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-5"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-6"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-7"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-8"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-9"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-10"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-11"><span style={{backgroundColor: this.props.color}}/></div>
        <div className="ui-loading-12"><span style={{backgroundColor: this.props.color}}/></div>
      </div>
    );
  }
}
