import { ReactNode } from "react"
import Layout, { Content, Header } from "antd/es/layout/layout"
import { theme } from "antd"
import NavBar from "./components/commons/NavBar"
import "./App.css"

interface AppProp {
  children?: ReactNode;
}

function App(prop: AppProp) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Layout>
          <Header
            style={{
              margin: "1%",
              padding: 0,
              background: colorBgContainer,
              textAlign: "center",
              height: "10%",
            }}
          >
            <NavBar/> 
          </Header>
          <Content
            style={{
              margin: "1%",
            }}
          >
            {prop.children}
          </Content>
          {/*   <Foter/> */}
        </Layout>
      </Layout>
    </>
  );
}

export default App;
