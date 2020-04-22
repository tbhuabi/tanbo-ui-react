import React from 'react';
import cssModules from 'react-css-modules';
import styles from './home.scss';
import bannerImg from '../../assets/images/banner.png';

import { Breadcrumb } from '../../libraries/public-api';

function home() {
  return (
    <div className="home-wrap">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>详情</Breadcrumb.Item>
        </Breadcrumb>
        <div styleName="banner">
          <img src={bannerImg} alt="quick start" />
        </div>
        <p>简单 快速 高效</p>
      </div>
    </div>
  );
}

export default cssModules(home, styles);
