import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { persister } from "./redux/index";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./components/Home";
import Header from "./components/Header"
import Events from "./components/Events";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import AdminSignIn from "./components/AdminSignIn";
import Mailbox from "./components/Mailbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBWrkclyWSFN__LQKqV8Ien0dun50sokQk",
  authDomain: "crystal-clear-consulting.firebaseapp.com",
  projectId: "crystal-clear-consulting",
  storageBucket: "crystal-clear-consulting.appspot.com",
  messagingSenderId: "965149144100",
  appId: "1:965149144100:web:fbf5ae80b5fa4e31a154b1",
  measurementId: "G-N0SY4EN9P0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/budgeting",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/admin-signIn",
    element: <AdminSignIn />,
  },
  {
    path: "/mailBox",
    element: <Mailbox />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Header />
        <RouterProvider router={routes} />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
