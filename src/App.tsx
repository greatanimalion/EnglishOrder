import React, { useState } from 'react';
import Logo from '@/components/Logo'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,

  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';
import { Switch } from 'antd';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  //主题默认为true，亮
  const [themValue, setThemValue] = useState<boolean>(true);
  const setTheme = (checked: boolean) => {
    setThemValue(checked)
  }
  return (
    <ConfigProvider
      theme={{
        algorithm:
          themValue? theme.defaultAlgorithm : theme.darkAlgorithm
      }}
    >
      <Layout style={{ height: '100vh'}}  >
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:themValue?'#FFFFFF':'#141414'}}> 
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
                label: '近年数据',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background:themValue?"#FFFFFF":"#141414" }}>
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
            <Switch checkedChildren="亮" unCheckedChildren="暗" defaultChecked onChange={setTheme} />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: themValue?'#FFFFFF':'#141414',
              borderRadius: '8px',
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;