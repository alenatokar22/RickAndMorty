import Header from "../src/components/Header";
import "./index.css";
import { FirstPage } from "../src/components/FirstPage";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <div className="container">
      <div className="App">
        <AuthProvider />
        <Header />
        <FirstPage />
      </div>
    </div>
  );
}

export default App;
