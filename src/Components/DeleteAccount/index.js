import React, { useState } from "react";
import Form from "../Form";
import Input from "../Form/Input";
import Button from "../Form/Button";
import "./deleteAccount.css";
import { deleteAccount } from "../../utils";

const DeleteAccount = () => {
  const [accountId, setAccountId] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    accountId.length === 24
      ? deleteAccount(accountId, setMessage)
      : setMessage("ID must be 24 characters long");
  };

  const handleChange = (e) => {
    setAccountId(e.target.value);
  };

  return (
    <div className="deleteAccount">
      <Form>
        <label>
          Enter Account ID: <Input type="text" handleChange={handleChange} />
        </label>
        <Button text="Delete Account" handleClick={handleClick} />
      </Form>
      <h2>{message}</h2>
    </div>
  );
};

export default DeleteAccount;
