import { BrowserRouter } from "react-router-dom";
import "./assets/css/App.css";
import Header from "./components/Header";
import RoutesNav from './Routes/Routes';
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <RoutesNav/>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
