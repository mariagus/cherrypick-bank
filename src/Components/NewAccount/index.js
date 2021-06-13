import React, { useState } from "react";
import Form from "../Form";
import "./newAccount.css";
import Input from "../Form/Input";
import Button from "../Form/Button";

function NewAccount(props) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:5050/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, balance: balance }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleBalance = (e) => {
    setBalance(e.target.value);
  };

  return (
    <div className="newAccount">
      <Form>
        <label for="fullname">
          enter full name:
          <Input type="text" value="fullname" handleChange={handleName} />
        </label>
        <label for="balance">
          enter balance: <Input type="number" handleChange={handleBalance} />
        </label>

        <Button text="Create" handleClick={handleClick}></Button>
      </Form>
      <h2>{message}</h2>
    </div>
  );
}

export default NewAccount;
