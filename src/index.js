import React from 'react';
import ReactDOM from 'react-dom';
import { CompassOutlined,SnippetsOutlined,DesktopOutlined } from '@ant-design/icons';
import { RcProvider } from '@byteforce/context';
import { RcRouter } from '@byteforce/router';
import {Page} from '@byteforce/page';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.min.css';
import '@byteforce/theme/style/reset.css'
import { Navigate} from "react-router-dom";
import './index.less'
const Page1 = ()=>{
  return (
    <>
      <Page 
        pageTitle="Page1" 
        subTitle="" 
        bodyStyle={{ padding: 16 }} 
        >
          
          页面容器

      </Page>
    </>
  )
}


let appSetting = {
  moduleTitle:'前端项目',
  // oauthEnabled:true,
  // oauthUrl:'https://login.byteforce.cn',
  // clientId:'demo',
  // clientSecret:'123456',
  // clientHost:'http://localhost:9700',
  allApps:[],
  //router setting
  allRoutes:[
    { path: '/', exact: true, element:<Navigate to='/page1'/>},
    { path: '/page1', exact: true, element: <Page1/> },
  ],
  //left side setting
  sideMenu: [
    {
      menuIcon: <CompassOutlined />,
      menuLabel: '页面1',
      path: '/page1'
    }
  ],
};

const AppRoot = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RcProvider initialValue={appSetting}>
        <RcRouter/>
      </RcProvider>
    </ConfigProvider>
  )
}

ReactDOM.render(
  <AppRoot />
  ,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
