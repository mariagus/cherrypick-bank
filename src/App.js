import "./App.css";
import Nav from "./Components/Nav";
import DeleteAccount from "./Components/DeleteAccount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CHERRYPICK BANK</h1>
      </header>
      <Nav />
      <DeleteAccount />
    </div>
  );
}

export default App;
