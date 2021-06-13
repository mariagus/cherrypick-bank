const createAccount = async (body, message) => {
  await fetch("http://localhost:5050/accounts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => message(data.message));
};

export default createAccount;
