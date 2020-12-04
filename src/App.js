import "./App.css";
import Counter from "./Components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import TempConverter from "./Components/TempConverter";
import FlightBooker from "./Components/FlightBooker";

function App() {
  return (
    <div>
      <Counter />
      <TempConverter />
      <FlightBooker />
    </div>
  );
}

export default App;
