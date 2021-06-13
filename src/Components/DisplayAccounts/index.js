import React, { useState, useEffect } from "react";
import Currency from "currency.js";
import "./displayAccounts.css";
import { getAccounts } from "../../utils";

function DisplayAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts(setAccounts);
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      <ul className="accountsListing">
        {accounts.map(({ _id, name, balance }) => (
          <div key={_id} className="account">
            <li>
              <span>Name:</span> {name} <br />
              <span>Balance: </span>
              {Currency(balance, { symbol: "£" }).format()}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAccounts;
