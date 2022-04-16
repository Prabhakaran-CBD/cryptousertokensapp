import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

//using this context to provide the connectionWallet and the user address
//in other component - in Cryptocurrencies and NftToken
export const ConnectWalletContext = React.createContext();
const { ethereum } = window;

export const ConnectionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState([]);
  const [currentAccounts, setCurrentAccounts] = useState();

  const getConnectWallet = async () => {
    try {
      //if metamask ethereum is not found then alert with message to install the metamask
      if (!ethereum) return alert("Please install Metamask!");
      // //if wallet is already connected check and gien an alert message
      if (connectedAccount.length > 0) {
        return alert("Already connected to wallet!");
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setCurrentAccounts(accounts[0]);
      //once connected reload the page to get reflect
      window.location.reload();
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object found");
    }
  };

  //Check wallet is connected
  const checkWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask!");
      //if ethereum account is connected then get the current connected account
      const accounts = await ethereum.request({
        method: "eth_accounts",
      });

      //if account exist get them in the state
      if (accounts.length > 0) {
        setConnectedAccount(accounts[0]);
      }
    } catch (err) {
      console.log(err);
      throw new Error("No Ethereum object found");
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <ConnectWalletContext.Provider
      value={{
        getConnectWallet,
        connectedAccount,
        currentAccounts,
      }}
    >
      {children}
    </ConnectWalletContext.Provider>
  );
};
