import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/manipedi-pricing" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
