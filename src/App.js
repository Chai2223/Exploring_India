import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Places from "./routes/Places";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
