import React, { useState } from 'react';
import Logo from '@/components/Logo'
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, Popover, theme, Tooltip } from 'antd';
import i18 from '@/locales/i18next-config'
import CN_EN_SVG from '@/components/CN-EN';
import { Link, Navigate, Outlet } from "react-router-dom";
import { getInitialProps } from 'react-i18next';
import useThemeStore from '@/store/index';
import { SUN, NIGHT } from "@/components/SUN-NIGHT";

const { Header, Sider, Content } = Layout;

export const CollapsedContext = React.createContext(false)
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  const themValue = useThemeStore<boolean>((state) => state.theme)
  const setThemeValue = useThemeStore(state => state.setTheme)
  const setTheme = (checked: boolean) => {
    setThemeValue(checked)
  }
  function fullScreen() {
    setFullscreen(!fullscreen)
    if (!fullscreen) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }

  const [language, setLanguage] = useState<string>(getInitialProps().initialLanguage)
  i18.changeLanguage(language)
  return (
    <ConfigProvider
      theme={{
        algorithm: themValue ? theme.defaultAlgorithm : theme.darkAlgorithm
      }}
    >
      <CollapsedContext.Provider value={collapsed}>
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
                  key: '1',
                  icon: <UserOutlined />,
                  label: <Link to={'/admin/recentData'}>{i18.t('side.RecentData')}</Link>,
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: <Link to={'/admin/allStudents'}>{i18.t('side.ListOfApplicants')}</Link>,
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: i18.t('side.PublishAnAnnouncement'),
                },
              ]} />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: themValue ? "#FFFFFF" : "#141414" }}>
              <Tooltip placement="bottom" title={collapsed ? i18.t('header.expand') : i18.t('header.collapse')}>
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }} />
              </Tooltip>
              <div style={{ float: 'right' }}>
                <Tooltip placement='bottom' title={i18.t('header.switchTheme')} >
                  <Button
                    type='text'
                    icon={!themValue ? <SUN /> : <NIGHT />}
                    onClick={() => setTheme(!themValue)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                  >
                  </Button>
                </Tooltip>
              </div>
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
              <div style={{ float: 'right' }}>
                <Tooltip placement="bottom" title={fullscreen ? i18.t('header.exitFullScreen') : i18.t('header.fullScreen')}>
                  <Button
                    type="text"
                    icon={fullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                    onClick={fullScreen}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                  />
                </Tooltip>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 14,
                background: themValue ? '#F5F5F5' : '#000000',
                borderRadius: '8px',
                overflowY: 'scroll',
              }}>
              <Navigate to="/admin/recentData"></Navigate>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </CollapsedContext.Provider>
    </ConfigProvider>
  );
};

export default App;