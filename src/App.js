import "./App.css";
import wool from "../src/assets/wool1.webp";
import logo from "../src/assets/logo.jpg";

function App() {
  return (
    <div className="App-header">
      <img alt="logo" src={logo} />
      <p>Hi React</p>
      <img alt="woolImg" src={wool} />
    </div>
  );
}

export default App;
