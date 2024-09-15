import React, { useState } from 'react';
import Logo from '@/components/Logo'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, Popover, theme } from 'antd';
import { Switch } from 'antd';
import i18 from '@/locales/i18next-config'
import CN_EN_SVG from '@/components/CN-EN';
import { Link, Outlet } from "react-router-dom";
import { getInitialProps } from 'react-i18next';
import useThemeStore from '@/store/index';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {  
  const [collapsed, setCollapsed] = useState(false);
  //主题默认为true，亮
  // const [themValue, setThemValue] = useState<boolean>(true);
  const themValue=useThemeStore<boolean>((state)=>state.theme)
  const setThemeValue=useThemeStore(state=>state.setTheme)
  const setTheme = (checked: boolean) => {
    setThemeValue(checked)
  }
  const [language, setLanguage] = useState<string>(getInitialProps().initialLanguage)
  i18.changeLanguage(language)
  return (
    <ConfigProvider
      theme={{
        algorithm:
          themValue ? theme.defaultAlgorithm : theme.darkAlgorithm
      }}
    >
      <Layout style={{ height: '100vh', minHeight: 280, }}  >
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: themValue ? '#FFFFFF' : '#141414' }}>
          <Logo title='四六级数据' showTitle={!collapsed} theme={themValue} ></Logo>
          <div className="demo-logo-vertical" />
          <Menu
            theme='light'
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '/1',
                icon: <UserOutlined />,
                label: <Link to={'/admin/recentData'}>{i18.t('side.RecentData')}</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: i18.t('side.ListOfApplicants'),
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: i18.t('side.PublishAnAnnouncement'),
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: themValue ? "#FFFFFF" : "#141414" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Switch checkedChildren="亮" unCheckedChildren="暗"  defaultChecked={themValue} onChange={setTheme} style={{ float: 'right', marginRight: '10px', marginTop: '21px' }} />
            <div style={{ float: 'right' }}>
              <Popover style={{ padding: 0 }} content={<>
                <div>
                  <Button style={{ margin: '0' }} onClick={() => { setLanguage('zh-CN') }} type="text">&nbsp;&nbsp;中文&nbsp;&nbsp;</Button>
                </div>
                <div>
                  <Button onClick={() => { setLanguage('en-US') }} type="text">English</Button>
                </div>

              </>
              } >
                <span><CN_EN_SVG></CN_EN_SVG></span>
              </Popover>
            </div>

          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: themValue ? '#FFFFFF' : '#141414',
              borderRadius: '8px',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;