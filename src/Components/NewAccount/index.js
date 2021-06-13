import React, { useState } from "react";
import Form from "../Form";
import "./newAccount.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { createAccount } from "../../utils";

function NewAccount(props) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    createAccount({ name, balance }, setMessage);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleBalance = (e) => {
    setBalance(e.target.value);
  };

  return (
    <div className="newAccount">
      <h1>Create New Account</h1>
      <Form>
        <label>
          Enter full name:{" "}
          <Input type="text" value={name} handleChange={handleName} />
        </label>
        <label>
          Enter balance:{" "}
          <Input type="number" value={balance} handleChange={handleBalance} />
        </label>
        <Button text="Create" handleClick={handleClick}></Button>
      </Form>
      <h2>{message}</h2>
    </div>
  );
}

export default NewAccount;
