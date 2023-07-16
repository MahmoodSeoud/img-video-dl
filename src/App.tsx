import Toolbar from "./components/Toolbar/Toolbar";
import './App.css'
import ContextMenuOption from "./components/ContextMenuOption/ContextMenuOption";

function App() {
  return (
    <div className="App">
      <ContextMenuOption />
      <Toolbar />
    </div>
  );
}

export default App;