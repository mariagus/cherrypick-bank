import React, { useState, useEffect } from "react";
import Currency from "currency.js";
import "./displayAccounts.css";

function DisplayAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/accounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  }, []);
  return (
    <div>
      <h1>Accounts</h1>
      <ul className="accountsListing">
        {accounts.map(({ name, balance }) => (
          <div className="account">
            <li>
              <span>Name:</span> {name}
            </li>
            <li>
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
