import "./App.css";
import { HeaderComponent } from "./HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent
        header="Die Vision"
        title="Unser Ziel."
        description="Es läuft etwas schief. Wir haben eine Idee. Die Idee der Bau- und Kaufgemeinschaften."
      />
    </div>
  );
}

export default App;
