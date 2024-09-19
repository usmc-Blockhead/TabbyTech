import React, { useState } from "react";
import logo from "../../assets/images/TABBYTECH_cat.svg";
import Button from "./button";
import { Anchor, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Link } = Anchor;

function AppHeader() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="TabbyTech Solutions" className="logo-icon" />
                    <a href="#about">TabbyTech Solutions</a>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer
                        placement="right"
                        closable={true}
                        onClose={onClose}
                        open={open}
                    >
                        <Anchor targetOffset="65">
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Features" />
                            <Link href="#works" title="How it works" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default AppHeader;
