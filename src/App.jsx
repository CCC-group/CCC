import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Events from "./components/Events";
import Budgeting from "./components/Budgeting";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home open={open} handleOpen={handleOpen} handleClose={handleClose}/>} />
        <Route path="/budgeting" element={<Budgeting />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
