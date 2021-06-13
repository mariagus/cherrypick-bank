export const createAccount = async (body, setState) => {
  await fetch("http://localhost:5050/accounts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => setState(data.message));
};

export const getAccounts = async (setState) => {
  await fetch("http://localhost:5050/accounts")
    .then((res) => res.json())
    .then((data) => setState(data));
};
