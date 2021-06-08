import "./App.css";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import Button from "./Components/Form/Button";
import Input from "./Components/Form/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CHERRYPICK BANK</h1>
      </header>
      <Nav />

      <Form>
        <Input type="text" />
        <Button text="Button" />
      </Form>
    </div>
  );
}

export default App;
