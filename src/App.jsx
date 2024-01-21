
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import Budgeting from "./components/Budgeting";
import About from "./components/About";
import Header from "./components/Header";

import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
