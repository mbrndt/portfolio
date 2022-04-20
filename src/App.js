import "./App.css";
import { Main } from "./pages";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
