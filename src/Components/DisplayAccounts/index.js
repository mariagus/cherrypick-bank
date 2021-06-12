import React, { useState } from "react";

function DisplayAccounts() {
  const [accounts, setAccounts] = useState([]);

  const getAccounts = () => {
    fetch("http://localhost:5050/accounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  };
  return (
    <div>
      <h1 onClick={() => getAccounts()}>All accounts</h1>
      <ul className="accountsListing">
        {accounts.map(({ name, balance }) => (
          <div>
            <li>Account holder: {name}</li>
            <li>Balance: £{balance}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DisplayAccounts;
