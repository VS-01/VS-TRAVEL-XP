import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Service" element={<Service/>}/>
        {/*<Route path="/SignUp" element={<SignUp/>}/>*/}
      </Routes>
    </div>
  );
}
