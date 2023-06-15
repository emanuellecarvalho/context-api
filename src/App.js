import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Fruits from "../src/pages/Fruits";
import About from "../src/pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
