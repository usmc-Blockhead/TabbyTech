import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import AppFooter from "./components/common/footer";
import AppHeader from "./components/common/header";
import AppChat from "./components/common/chat";
import AppHome from "./views/home";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <AppHome />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
            <AppChat />
        </Layout>
    );
}

export default App;
