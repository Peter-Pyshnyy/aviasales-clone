import "./styles/reset.css";
import "./styles/style.css";
import logo from "./assets/img/Logo.svg";
import Stops from "./components/Stops";
import Airlines from "./components/Airlines";
import Flights from "./components/Flights";

function App() {
  return (
    <div className="App">
      <div className="Head">
        <img src={logo} />
      </div>
      <div className="Content">
        <div className="Settings">
          <Stops />
          <Airlines />
        </div>
        <div className="Flights">
          <Flights />
        </div>
      </div>
    </div>
  );
}

export default App;
