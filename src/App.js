import { BrowserRouter } from "react-router-dom";
import "./assets/css/App.css";
import Header from "./components/Header";
import RoutesNav from './Routes/Routes';
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Article from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <RoutesNav/>

        {/* <Slider />

        <div className="center main">
          <section class="content">
            <h2 class="subheader"> Ultimos articulos </h2>

            <Article />

          </section>

          <Sidebar />
        </div> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
