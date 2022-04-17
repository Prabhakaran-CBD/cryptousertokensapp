import React, { useEffect, useContext, useState } from "react";
import millify from "millify";
import { Row, Col, Card, Input, Typography } from "antd";
import { useGetCryptoQuery } from "../services/cryptoAPI";
import { ConnectWalletContext } from "../context/ConnectWalletContext";
import SearchBar from "../utils/SearchBar";

const Cryptocurrencies = () => {
  const { connectedAccount } = useContext(ConnectWalletContext);
  const [searchToken, setSearchToken] = React.useState("");
  //passing the count to get the max of the cryptolist
  //Note - api is allowing to get the max of 50 crypto tokens as a whole
  //Redux toolKit provides the below hook automaitically when calling the createAPI module
  //giving option to look for the connected wallet account or for the given user account
  const { data: cryptosList, isLoading } = useGetCryptoQuery(
    searchToken ? searchToken : connectedAccount
  );

  const [cryptos, setCryptos] = React.useState([]);

  const [userData, setUserData] = useState({
    balance: "",
    symbol: "",
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    const getTokenInfo = async () => {
      const userTokenData = cryptosList?.tokens?.map((tokenItems) => ({
        balance: tokenItems.rawBalance / 10 ** tokenItems.tokenInfo.decimals,
        name: tokenItems.tokenInfo.name,
        symbol: tokenItems.tokenInfo.symbol,
        imageUrl: tokenItems.tokenInfo.image,
      }));
      setUserData(userTokenData);
    };

    getTokenInfo();
  }, [cryptosList, searchToken]);

  const onSearchAccount = (searchAccount) => {
    setSearchToken(searchAccount);
  };

  //if (isLoading) return "Loading...";

  return (
    <div>
      <h5 style={{ marginLeft: "20rem" }}>Looking for Ethereum Tokens</h5>
      <SearchBar searchAccount={onSearchAccount} />
      {connectedAccount.length > 0 ? (
        <>
          {!isLoading ? (
            <>
              {userData?.length > 0 ? (
                <>
                  <div>
                    <h1 className="crypto-heading-container">
                      List of CryptoCurrencies
                    </h1>
                  </div>

                  <Row gutter={[32, 32]} className="crypto-card-container">
                    {userData?.map((cryptoItems, index) => (
                      <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={index}
                      >
                        <Card
                          style={{ borderBlockColor: "cyan" }}
                          title={`#${index + 1}.${cryptoItems?.symbol} `}
                          extra={
                            <img
                              className="crypto-image"
                              src={`https://ethplorer.io${
                                cryptoItems?.imageUrl ?? ""
                              }`}
                              alt=""
                            />
                          }
                          hoverable
                        >
                          <p>name: {cryptoItems?.name ?? "Not updated"}</p>
                          {!isNaN(cryptoItems.balance) ? (
                            <>
                              <p>
                                Balance:{" "}
                                {parseFloat(cryptoItems?.balance).toFixed(4)}
                              </p>
                            </>
                          ) : (
                            <p>Balance: 0</p>
                          )}
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </>
              ) : (
                <div className="no-found-message">
                  <h1>No ethereum token found for the connected wallet user</h1>
                  <div style={{ marginLeft: "1rem" }}>
                    <h3>{connectedAccount}</h3>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="no-found-message">
              <h3>Loading...</h3>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cryptocurrencies;
