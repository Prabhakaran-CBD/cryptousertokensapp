//select rafce snippet
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, NFTTokens, Cryptocurrencies } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/nfttokens">
                <NFTTokens />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
