
import './App.css';
import {ReactKeypress} from "./components/keypress/ReactKeypress"
import {useState} from "react"
import {A} from "./components/keypress/components/A"
import {B} from "./components/keypress/components/B"
import {C} from "./components/keypress/components/C"
import {D} from "./components/keypress/components/D"

function App() {
  const [data, setData] = useState({
    componentsData: [
      { id: 1, component: <A shortcuts={["shift s"]}/> },
      { id: 2, component: <B shortcuts={["shift s"]}/> },
      { id: 3, component: <C shortcuts={["shift s"]}/> },
      { id: 4, component: <D shortcuts={["shift s"]}/> },
    ],
  });

  return (
    <div className="App">
      <ReactKeypress componentInfo={data.componentsData} comboIdentifier={"shift s"}/>
    </div>
  );
}

export default App;
