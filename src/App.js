import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Material from "./components/Materials";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{ height: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/werew",
              icon: <UserOutlined />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: "/wer",
              icon: <UserOutlined />,
              label: <Link to="/aa">Home</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="/aa">Material</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
              type: "submenu",
            },
          ]}
        />
        {/* <Link to={"/"}>homew</Link>
          <Link to={"/aa"}>erwerewr</Link> */}
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route key="home" path="/" element={<Material />} />
            <Route
              key="medeee"
              path="/aa"
              element={<Material name={"hhhh"} />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
