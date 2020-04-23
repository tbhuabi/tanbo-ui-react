import React from 'react';
import cssModules from 'react-css-modules';
import styles from './home.scss';

import { UIBreadcrumb, UILoading, UIPanel, UIStep } from '../../libraries/public-api';

function home() {
  return (
    <div className="home-wrap">
      <div className="container">
        <UIBreadcrumb>
          <UIBreadcrumb.Item>首页</UIBreadcrumb.Item>
          <UIBreadcrumb.Item>详情</UIBreadcrumb.Item>
        </UIBreadcrumb>
        <UILoading/>
        <UIPanel fill theme={'primary'}>
          <UIPanel.Header>
            <h3 className="ui-panel-title">标题</h3>
          </UIPanel.Header>
          <UIPanel.Body>
            body
          </UIPanel.Body>
          <UIPanel.Footer>
            footer
          </UIPanel.Footer>
        </UIPanel>
        <UIStep activeIndex={2}>
          <UIStep.Item>
            <h4 className="ui-step-title">正式开发 <small>2019-08-10</small></h4>
            <p className="ui-step-content">安排相关技术人员开发相关功能。</p>
          </UIStep.Item>
          <UIStep.Item>
            <h4 className="ui-step-title">正式开发 <small>2019-08-10</small></h4>
            <p className="ui-step-content">安排相关技术人员开发相关功能。</p>
          </UIStep.Item>
          <UIStep.Item>
            <h4 className="ui-step-title">正式开发 <small>2019-08-10</small></h4>
            <p className="ui-step-content">安排相关技术人员开发相关功能。</p>
          </UIStep.Item>
          <UIStep.Item>
            <h4 className="ui-step-title">正式开发 <small>2019-08-10</small></h4>
            <p className="ui-step-content">安排相关技术人员开发相关功能。</p>
          </UIStep.Item>
          <UIStep.Item>
            <h4 className="ui-step-title">正式开发 <small>2019-08-10</small></h4>
            <p className="ui-step-content">安排相关技术人员开发相关功能。</p>
          </UIStep.Item>
          <UIStep.Item>
            <h4 className="ui-step-title">正式开发 <small>2019-08-10</small></h4>
            <p className="ui-step-content">安排相关技术人员开发相关功能。</p>
          </UIStep.Item>
        </UIStep>
      </div>
    </div>
  );
}

export default cssModules(home, styles);
