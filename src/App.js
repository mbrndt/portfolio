import "./App.css";
import { Main } from "./pages";
import { Navbar } from "./components/navbar";
import background from "./assets/background.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
// style={{ backgroundImage: `url(${background})` }}
