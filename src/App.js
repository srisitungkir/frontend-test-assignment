import logo from "./logo.svg";
import "./App.css";
import CustomInput from "./CustomInput";
import CatFact from "./CatFact";
import AsignInput from "./AsignInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="image-react" data-testid="image-react" src={logo} className="App-logo" alt="logo" />
        <p data-testid="App-text">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a data-testid="App-link" className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <AsignInput />

        <CustomInput />
        <CatFact />
      </header>
    </div>
  );
}

export default App;
