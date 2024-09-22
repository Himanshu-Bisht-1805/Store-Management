import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import MaterialList from "./components/Materials/listing";
import AddMaterials from "./components/Materials/form";
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
              key: "/1",
              icon: <UserOutlined />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: "/2",
              icon: <UserOutlined />,
              label: <Link to="/add-materials">Add Material</Link>,
            },
            {
              key: "/3",
              icon: <UserOutlined />,
              label: <Link to="/materials">Material</Link>,
            },
            {
              key: "/4",
              icon: <UserOutlined />,
              label: <Link to="/materials">Material</Link>,
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
            <Route key="home" path="/" />
            <Route
              key="add-materials"
              path="/add-materials"
              element={<AddMaterials />}
            />
            <Route
              key="materials"
              path="/materials"
              element={<MaterialList />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
