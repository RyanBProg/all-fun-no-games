import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Quizzy from "./pages/Quizzy.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/quizzy" element={<Quizzy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
