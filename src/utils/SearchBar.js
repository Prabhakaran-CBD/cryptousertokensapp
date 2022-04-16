import React, { useState } from "react";
import { Input } from "antd";

const SearchBar = ({ searchAccount }) => {
  const onEventHandlerRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="search-crypto">
        <Input
          type="text"
          placeholder="Search by user account"
          style={{
            width: "24rem",
            height: "50px",
            border: "1px solid #737373",
            boxSizing: "border-box",
            borderRadius: "10px",
            fontSize: "15px",
            padding: "0 10px",
            display: "inline-block",
          }}
          onChange={(e) => searchAccount(e.target.value)}
        />

        <button
          style={{
            height: "40px",
            width: "60px",
            boxSizing: "border-box",
            borderRadius: "10px",
            padding: "1px",
            margin: "5px",
          }}
          onClick={onEventHandlerRefresh}
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default SearchBar;
