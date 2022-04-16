import React, { useContext, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { MoneyCollectOutlined, FundOutlined } from "@ant-design/icons";
import icon from "../images/cryptocoin2.png";
import { ConnectWalletContext } from "../context/ConnectWalletContext";
//import Cryptocurrencies from "./Cryptocurrencies";

const Navbar = () => {
  const { getConnectWallet, connectedAccount } =
    useContext(ConnectWalletContext);

  const onClickEventHandler = () => {
    //Alert message if wallet is not connected
    if (connectedAccount.length == 0)
      return alert("Please connect to the wallet!");
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <div>
            <h3 style={{ color: "white", fontSize: "25" }}>Cryptocoin</h3>
          </div>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<FundOutlined />} onClick={onClickEventHandler}>
          {connectedAccount.length > 0 ? (
            <>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </>
          ) : (
            <Link to="/">Cryptocurrencies</Link>
          )}
        </Menu.Item>
        <Menu.Item
          icon={<MoneyCollectOutlined />}
          onClick={onClickEventHandler}
        >
          {connectedAccount.length > 0 ? (
            <>
              <Link to="/nfttokens">NFT</Link>
            </>
          ) : (
            <Link to="/">NFT</Link>
          )}
        </Menu.Item>
        <div
          style={{
            marginLeft: "20px",
            color: "white",
          }}
        >
          <Button
            style={{
              marginTop: "0.3rem",
              borderRadius: "10px",
            }}
            onClick={getConnectWallet}
          >
            Connect Wallet
          </Button>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
