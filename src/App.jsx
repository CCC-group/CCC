import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Events from "./components/Events";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWrkclyWSFN__LQKqV8Ien0dun50sokQk",
  authDomain: "crystal-clear-consulting.firebaseapp.com",
  projectId: "crystal-clear-consulting",
  storageBucket: "crystal-clear-consulting.appspot.com",
  messagingSenderId: "965149144100",
  appId: "1:965149144100:web:fbf5ae80b5fa4e31a154b1",
  measurementId: "G-N0SY4EN9P0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

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
        <Route path="/budgeting" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
